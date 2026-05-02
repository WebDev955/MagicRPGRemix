import {createContext, useState} from "react";
import type { ReactNode } from "react";

//IMPORT - Utils
import {createBattler, calculateDamage, determineBattleOver} from "../Battles/battleUtils"


//IMPORT - TYPES
import type {battlerType} from "../Battles/battleUtils"
import type {PlayerContextType} from "../../data/PlayerData"
import type {EnemyType} from "../../types/EnemyTypes"
import type {SpellType} from "../../types/SpellTypes";


// -------------------------
// TYPES
// -------------------------

type LastActionType = {
    caster: string | undefined,
    spellName: string | undefined,
    damageDealt: number | undefined,
    targetName: string | undefined
}

type BattleState = {
    player: battlerType,
    enemy: battlerType,
    currentTurn: "player" | "enemy",
    isBattleOver: boolean,
    lastAction: LastActionType | null,
}
type BattleContextType = {
    battle: boolean;  
    battleReady: boolean,
    battleState: BattleState,
    activeBattler: battlerType;

    startBattle: (player: PlayerContextType, enemy: EnemyType) => void;
    createBattler: (player: PlayerContextType, enemy: EnemyType) => {
        player: battlerType; 
        enemy: battlerType 
    };

    enemyTurn: (enemy: EnemyType) => void,
    enemyAction: (enemy: EnemyType) => void
    

    determineTurn: (btlrPlayer:battlerType, enemy:battlerType) => "player" | "enemy"
    ///activeBattler: battlerType,
    castSpell: (spell: SpellType) => void,    
    //defend: () => void,
    //bag: () => void,
    //run: () => void,
    //isBattleOver: () => void,
    //rewardsXP: () => void
};

// -------------------------
// CONTEXT
// -------------------------
export const BattleContext = createContext<BattleContextType>({
    
    battle: false,
    battleReady: false,
    battleState: {
        player: {} as battlerType,
        enemy: {} as battlerType,
        currentTurn: "player" ,
        isBattleOver: false,
        lastAction: null,
        
    },
    activeBattler: {} as battlerType,
    startBattle: () => {},
    createBattler: () => ({
        player: {} as battlerType,
        enemy: {} as battlerType,
    }),
    determineTurn: () => "player",
    enemyTurn: () => {},
    castSpell: () => {},
    enemyAction: () => {},
    //isBattleOver: () => {},
    //defend: () => {},
    //bag: () => {},
    //run: () => {},
});

// -------------------------
// PROVIDER
//  Only in Provider is where you create functions and estbalish state.
// -------------------------
type Props = {
    children: ReactNode;
};

const BattleContextProvider = ({children}:Props) => {

const [battle, setBattle] = useState(false)
const [battleReady, setBattleReady] = useState(false)

const [battleState, setBattleState] = useState<BattleState>({
        player: {} as battlerType,
        enemy: {} as battlerType,
        currentTurn: "player",
        isBattleOver: false,
        lastAction: null
    })

    // Derived: who's the active battler based on currentTurn
    const activeBattler =
        battleState.currentTurn === "player" 
            ? battleState.player
            : battleState.enemy;

const determineTurn = (btlrPlayer:battlerType, btlrEnemy:battlerType) => {
        if (btlrPlayer.stats.speed > btlrEnemy.stats.speed ) {
            return "player"
        } else {
            return "enemy"
        }
    }
    
/*** 1. START BATTLE *****/    
const startBattle = (player:PlayerContextType, enemy:EnemyType) => {
    setBattle(true)
    const {player: btlrPlayer, enemy: btlrEnemy} = createBattler(player, enemy);
    
    const firstTurn = determineTurn(btlrPlayer, btlrEnemy)

    setBattleState({
        player: btlrPlayer,
        enemy: btlrEnemy,
        currentTurn: firstTurn,
        isBattleOver: false,
        lastAction: null
    })
    setBattleReady(true)
}

const castSpell = (spell:SpellType) => {
//Set Caster and Target
    const caster = battleState.currentTurn === "player"
        ? battleState.player
        : battleState.enemy
    const target = battleState.currentTurn === "player"
        ? battleState.enemy
        : battleState.player
//Set Spell Data
    const spellBuff = spell.buff
    const spellDebuff = spell.debuff
    const spellDamage = calculateDamage(spell)

//Update Caster and Target after spell/turn action 
    const updatedCaster = {
        ...caster,
        stats: {
            ...caster.stats,
            buffs: [...caster.stats.buffs, spellBuff].filter(Boolean) as string[],
        },
        element: spell.element
    };
    const updatedTarget = {
        ...target,
        stats: {
            ...target.stats,
            hp: target.stats.hp - spellDamage,
            debuffs: [...target.stats.debuffs, spellDebuff].filter(Boolean) as string[]
        }
    };

//Updates after turn
    const isBattleOver = determineBattleOver(updatedCaster, updatedTarget)

    setBattleState(prev => ({
        ...prev,        
        player: prev.currentTurn === "player" ? updatedCaster : updatedTarget,
        enemy: prev.currentTurn === "player" ? updatedTarget : updatedCaster,
        currentTurn: prev.currentTurn === "player" ? "enemy" : "player",
        isBattleOver: isBattleOver,
        lastAction:{
            caster: caster.name,
            spellName: spell.name,
            damageDealt: spell.power,
            targetName: target.name
         }
    }));
}

const enemyAction = (enemy: EnemyType) => { 
    const caster = battleState.enemy
    const target = battleState.player
//set and select Spell data
    const spells = enemy.spells
    const randomSpellIndex = Math.floor(Math.random() * spells.length)
    const choosenSpell = spells[randomSpellIndex]
    const spellBuff = choosenSpell.buff
    const spellDebuff = choosenSpell.debuff
    const spellDamage = calculateDamage(choosenSpell)
//Update caster and target after spell/turn action
    const updatedCaster = {
        ...caster,
        stats: {
            ...caster.stats,
            buffs: [...caster.stats.buffs, spellBuff].filter(Boolean) as string[],
        },
    };
    const updatedTarget = {
        ...target,
        stats: {
            ...target.stats,
            hp: target.stats.hp - spellDamage,
            debuffs: [...target.stats.debuffs, spellDebuff].filter(Boolean) as string[]
        }
    };

//After turn updatea
    const isBattleOver = determineBattleOver(updatedCaster, updatedTarget)
    setBattleState(prev => ({
        ...prev,
        player: updatedTarget,
        enemy: updatedCaster,
        currentTurn: "player",
        isBattleOver: isBattleOver,
        lastAction: {
            caster: caster.name,
            spellName: choosenSpell.name,
            damageDealt: choosenSpell.power,
            targetName: target.name
         }
    }));
}


const enemyTurn = (enemy: EnemyType) => {
    enemyAction(enemy)
}

/**********************
 2. BATTLER HELPER FUNCTIONS
***********************/
//const isBattleOver = (btlrPlayer:Object, btlrEnemy:Object) => {
    //if (btlrPlayer.HP === 0){
        //return btlrPlayer
    //}
    //if (btlrEnemy.HP === 0){
        //determineXp()
        //determineRewards() 
        //return btlrEnemy
    //}
    //else { 
        //(btlrPlayer.HP && btlrEnemy.HP > 0){
        //return 
      //}
    //}  
/**********************
 ACCOUNT CONTEXT OBJECT
***********************/
    const battleCtx: BattleContextType = {
        battle,
        battleReady,
        battleState,
        activeBattler,
        startBattle,
        createBattler,
        determineTurn,
        castSpell,
        enemyAction,
        enemyTurn,
        //isBattleOver,
        //rewardsXP
    }
return (
        <BattleContext.Provider value={battleCtx}>
            {children}
        </BattleContext.Provider>
    );
}


export default BattleContextProvider
