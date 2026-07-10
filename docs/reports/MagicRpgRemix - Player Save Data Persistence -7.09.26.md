# MagicRpgRemix - Player Save Data Persistence -7.09.26

## Summary

Added `localStorage` persistence for game progress (quest log, equipped items, bag) in [PlayerContext.tsx](../../src/components/contexts/PlayerContext.tsx), keyed by the logged-in player's name from [AccountContext.tsx](../../src/components/contexts/AccountContext.tsx). Along the way, found and corrected a design mistake in how [PlayerCreationForm.tsx](../../src/components/UI/Forms/PlayerCreationForm.tsx) was about to store game data, plus several bugs introduced while building the load/save effects.

## Starting point: a conflated data model

`PlayerCreationForm.tsx` was building this at account-creation time ([PlayerCreationForm.tsx:29-34](../../src/components/UI/Forms/PlayerCreationForm.tsx#L29-L34)):

```ts
const newAccountData = {
    PlayerInfo: [playerName, email, password],
    gameData: { QuestList }
}
```

Two problems with this approach:

1. **Type mismatch.** `AccountContext.createAccount(data: UserAccount)` ([AccountContext.tsx:68](../../src/components/contexts/AccountContext.tsx#L68)) expects `{ playerName, email, password }` ([AccountContext.tsx:6-10](../../src/components/contexts/AccountContext.tsx#L6-L10)). `{ PlayerInfo: [...], gameData: {...} }` is a different shape and wouldn't satisfy that type.
2. **Conflated concerns, and the wrong source.** `AccountContext` is identity/session, written once at creation. Game progress needs continuous updates as the player plays — a one-time snapshot at account creation can never reflect later play. Worse, `QuestList` here is the *static master template* imported from `QuestData.tsx`, not `PlayerContext.questLog` — the live state `updateQuest` actually mutates. Saving `QuestList` would have captured the unstarted quest definitions, not real progress.

Decision: keep `AccountContext` as identity-only (unchanged), and give `PlayerContext` its own load/save effects, scoped by `playerName`, covering the state that actually represents progress. `PlayerCreationForm.tsx` was **not** modified — the broken `newAccountData` object above is still there and still needs to be simplified back down to just `{ playerName, email, password }` as a follow-up.

## Implementation

Two effects added to `PlayerContextProvider` ([PlayerContext.tsx:174-193](../../src/components/contexts/PlayerContext.tsx#L174-L193)):

**Load** — runs when `playerName` becomes available (populated asynchronously by `AccountContext`'s own mount effect, [AccountContext.tsx:87-94](../../src/components/contexts/AccountContext.tsx#L87-L94)):

```ts
useEffect(() => {
    if (!playerName) return
    const savedPlayerData = localStorage.getItem(`gameData_${playerName}`)
    if (savedPlayerData) {
        const parsed = JSON.parse(savedPlayerData)
        setEquipedItems(parsed.equipedItems)
        setQuestLog(parsed.questLog)
        setBag(parsed.bag)
    }
},[playerName]);
```

**Save** — runs whenever the saved slices change, and creates the `localStorage` entry the first time it fires (no separate "create" step needed — `setItem` creates the key if it's missing):

```ts
useEffect(() => {
    if (!playerName) return
    localStorage.setItem(`gameData_${playerName}`, JSON.stringify({ equipedItems, questLog, bag }))
},[playerName, equipedItems, questLog, bag]);
```

Deliberately excluded from the save shape: `isInventoryOpen`, `isQuestLogOpen`, `isMonsterLogOpen`, `isPlayerGuideOpen` — these are ephemeral UI toggle state, not game progress, and saving them would just reopen a random menu on next load.

## Bugs fixed while building this

- `useEffect` wasn't imported in `PlayerContext.tsx` at all — added to the React import.
- `bag` state was declared as `useState<BagType[]>([])` (an array) when `PlayerContextType.bag` is a single `BagType` object ([PlayerData.tsx:31-38](../../src/data/PlayerData.tsx#L31-L38)). Corrected to `useState<BagType>({ gold: 0, spells: [], armor: [], weapons: [], potions: [], materials: [] })`.
- Load effect had no `playerName` guard, so it would have run once with `playerName === undefined` before `AccountContext` populated it, doing a pointless lookup under `gameData_undefined`.
- Earlier drafts of the load effect called `localStorage.setItem` (write) where `getItem` (read) was needed, used a plain string instead of a template literal (`${playerName}` wasn't interpolating), and set state to itself (`setQuestLog(questLog)`) instead of to the parsed result (`setQuestLog(parsed.questLog)`) — all corrected in the version above.

## Lint note

The load effect's `setState` calls tripped `react-hooks/set-state-in-effect`. This is a deliberate, scoped suppression (`eslint-disable-next-line`, [PlayerContext.tsx:180-181](../../src/components/contexts/PlayerContext.tsx#L180-L181)) rather than a bug: hydrating state from an external store (`localStorage`) keyed by an ID that arrives asynchronously from another context is exactly the "sync with an external system" case effects are meant for, not the "derive state during render" case the rule is trying to catch. Only one disable comment was needed — the rule fires once per effect, not once per `setState` call inside it.

## Follow-ups (not yet done)

- `PlayerCreationForm.tsx` still builds the broken `newAccountData` object described above — needs to go back to just `{ playerName, email, password }`.
- The save shape (`equipedItems`, `questLog`, `bag`) doesn't include `stats` yet. If stat progression (leveling, etc.) is added later, it needs to be added to **both** the load and save effects, or it'll silently not persist.
- No save-format versioning. If the shape of the saved object changes later (renamed field, new required field), older saves in a player's browser will parse successfully but hand back `undefined` for missing fields — worth a `version` field in the blob before this ships further.
