# MagicRpgRemix - Battle Quest Event Flow -7.09.26

Traces how a click on a map grid cell turns into a battle, and how a finished battle is (supposed to) update quest status. Covers [MapData.tsx](../../src/data/MapData.tsx), [MapForest.tsx](../../src/data/MapForest.tsx), [BottomScreen.tsx](../../src/components/screens/BottomScreen.tsx), [SceneContext.tsx](../../src/components/contexts/SceneContext.tsx), [BattleContext.tsx](../../src/components/contexts/BattleContext.tsx), [Battle.tsx](../../src/components/Battles/Battle.tsx), and [PlayerContext.tsx](../../src/components/contexts/PlayerContext.tsx).

## 1. Mount — which map is showing

[BottomScreen.tsx:12-25](../../src/components/screens/BottomScreen.tsx#L12-L25) reads `sceneCtx.currentMap` ("castle" | "forest") and mounts either `<CastleMap/>` or `<ForestMap/>` from [MapForest.tsx](../../src/data/MapForest.tsx).

## 2. Grid data — what a cell knows about itself

Each cell in `castleMapArray` / `forestMapArray` ([MapData.tsx:1-13](../../src/data/MapData.tsx#L1-L13)) is a `MapCell`:

```ts
type MapCell = {
  gridCord: string, gridType: string, mapType: string, passable: boolean,
  eventType: string | null,      // "battle" | "npc" | "newMap" | null
  relatedQuest: string | null,   // e.g. "quest_000"
  sceneId: string, bgImg: string,
  npcId: string | null, enemyId: string | null, villageId: string | null,
}
```

Example battle cell ([MapData.tsx:21](../../src/data/MapData.tsx#L21)): `eventType: "battle", relatedQuest: "quest_000", enemyId: "enemy_1"`.

## 3. Player click — reading the cell and branching

`CastleMap`/`ForestMap` render a `<div>` per cell; `onClick` calls `cellEvent(...)` with that cell's fields ([MapForest.tsx:18-28](../../src/data/MapForest.tsx#L18-L28)):

```ts
if (eventType === "battle") {
  if (enemyId) scene.renderBattle(enemyId, gridCord, relatedQuest)
} else {
  scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType, gridCord, relatedQuest)
}
```

So `eventType` is the switch: `"battle"` → battle path; anything else (`"npc"`, `"newMap"`, etc.) → generic scene path. `relatedQuest` and `enemyId` ride along into whichever handler fires.

## 4. SceneContext — recording the battle request

`renderBattle(enemyId, gridCord, relatedQuest)` ([SceneContext.tsx:126-135](../../src/components/contexts/SceneContext.tsx#L126-L135)) sets shared state:

```ts
battle = { enemyId, battleActive: true, relatedQuest }
```

and moves the player marker to `gridCord`. Nothing about the map UI knows how to *run* a battle — it just flags that one should happen.

## 5. Battle.tsx — turning the flag into an actual fight

`Battle.tsx` reads `sceneCtx.battle`, looks up the enemy in `EnemyList` by `enemyId`, and on mount calls `battleCtx.startBattle(playerCtx, enemyFound)` ([Battle.tsx:52-59](../../src/components/Battles/Battle.tsx#L52-L59)). `BattleContext.startBattle` ([BattleContext.tsx:138-154](../../src/components/contexts/BattleContext.tsx#L138-L154)) builds battler stats for both sides and picks who goes first by speed.

## 6. Turn loop

Player casts a spell via `castSpell` ([BattleContext.tsx:159-217](../../src/components/contexts/BattleContext.tsx#L159-L217)); enemy replies via `enemyTurn` → `enemyAction` ([BattleContext.tsx:221-275](../../src/components/contexts/BattleContext.tsx#L221-L275)). After each action, `determineBattleOver(caster, target)` ([battleUtils.tsx:76-87](../../src/components/Battles/battleUtils.tsx#L76-L87)) checks if **either** side's HP dropped to 0.

## 7. Battle end → quest update

Inside `castSpell`, once `isBattleOver` is true:

```ts
if (isBattleOver === true){
    if (relatedQuest === null) return
    updateQuest(relatedQuest)
}
```

([BattleContext.tsx:211-215](../../src/components/contexts/BattleContext.tsx#L211-L215)) — `relatedQuest` here is `sceneCtx.battle.relatedQuest`, the value that was threaded all the way from the `MapCell` back in step 2. `updateQuest(questId)` ([PlayerContext.tsx:134-144](../../src/components/contexts/PlayerContext.tsx#L134-L144)) flips `isQuestComplete: true` on the matching quest in `questLog`.

**Gap:** `determineBattleOver` returns `true` when *either* combatant's HP hits 0 — it doesn't report who won. `castSpell` calls `updateQuest` any time `isBattleOver` is true, including if the **player** was the one reduced to 0 HP. As written, losing a related-quest battle still marks the quest complete. If "win" should gate the quest update, `determineBattleOver` (or the caller) needs to also report/check whether `target.stats.hp <= 0` specifically (enemy defeated), not just "someone hit zero."

Separately: `enemyAction`'s own `updatedTarget.stats.hp` isn't clamped with `Math.max(0, ...)` the way `castSpell`'s is ([BattleContext.tsx:244](../../src/components/contexts/BattleContext.tsx#L244) vs [BattleContext.tsx:188](../../src/components/contexts/BattleContext.tsx#L188)), so player HP can go negative — cosmetic only, doesn't affect the `<= 0` check.

## 8. Exit

`Battle.tsx`'s effect watches `endBattle` (`battleCtx.battleState.isBattleOver`) and after a 3s delay calls `sceneCtx.exitBattle()` ([Battle.tsx:73-80](../../src/components/Battles/Battle.tsx#L73-L80)), clearing `battle` state and returning control to the map.

## Sequence at a glance

```
Click cell (MapForest.tsx)
  └─ read MapCell { eventType, enemyId, relatedQuest, gridCord } (MapData.tsx)
       └─ eventType === "battle" & enemyId present?
             ├─ yes → scene.renderBattle(enemyId, gridCord, relatedQuest)   [SceneContext.tsx]
             │         └─ Battle.tsx mounts → battleCtx.startBattle(player, enemy)  [BattleContext.tsx]
             │               └─ turn loop: castSpell / enemyTurn → determineBattleOver()  [battleUtils.tsx]
             │                     └─ isBattleOver === true
             │                           └─ updateQuest(relatedQuest)  [PlayerContext.tsx]  ⚠ fires on loss too, see Gap
             │                     └─ exitBattle() after 3s  → back to map
             └─ no  → scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType, gridCord, relatedQuest)
```
