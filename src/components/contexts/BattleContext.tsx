import {createContext, useState} from "react";
import type { ReactNode } from "react";

//IMPORT - Utils
import {createBattler} from "../Battles/battleUtils"

//IMPORT - TYPES
import type {battlerType} from "../Battles/battleUtils"
import type {playerContextType} from "./PlayerContext";
import type {enemy} from "../../data/Enemies"
import type { spell } from "../Battles/battleUtils";

// -------------------------
// TYPES
// -------------------------
type BattleState = {
    player: battlerType,
    enemy: battlerType,
    currentTurn: "player" | "enemy",
}

type BattleContextType = {
    battle: boolean;  
    battleState: BattleState,
    activeBattler: battlerType;

    startBattle: (player: playerContextType, enemy:enemy ) => void;
    createBattler: (player: playerContextType, enemy: enemy) => {
        player: battlerType; 
        enemy: battlerType 
    };
    determineTurn: (btlrPlayer:battlerType, enemy:battlerType) => "player" | "enemy"

    ///activeBattler: battlerType,
    castSpell: (spell: spell) => void,    
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
    battleState: {
        player: {} as battlerType,
        enemy: {} as battlerType,
        currentTurn: "player" ,
    },
    activeBattler: {} as battlerType,
    startBattle: () => {},
    createBattler: () => ({
        player: {} as battlerType,
        enemy: {} as battlerType,
    }),
    determineTurn: () => "player",

    castSpell: () => {},
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

const [battleState, setBattleState] = useState<BattleState>({
        player: {} as battlerType,
        enemy: {} as battlerType,
        currentTurn: "player"
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
const startBattle = (player:playerContextType, enemy:enemy) => {
    setBattle(true)
    const {player: btlrPlayer, enemy: btlrEnemy} = createBattler(player, enemy);
    
    const firstTurn = determineTurn(btlrPlayer, btlrEnemy)

    setBattleState({
        player: btlrPlayer,
        enemy: btlrEnemy,
        currentTurn: firstTurn
    })

}

const castSpell = (spell:spell) => {
    const caster = battleState.currentTurn === "player"
        ? battleState.player
        : battleState.enemy
    
    const target = battleState.currentTurn === "player"
        ? battleState.enemy
        : battleState.player

    //const spellCast = caster.spells.find(s => s.id === spell.id);
    
    const spellPower = spell.power
    const spellName = spell.name
    const spellElement = spell?.element

    const updatedCaster = {
        ...caster,
        stats: {
            ...caster.stats,
            buffs: [...caster.stats.buffs, spell?.buff].filter(Boolean) as string[]
        },
        element: spell?.element || undefined,
    };

    const updatedTarget = {
        ...target,
        stats: {
            ...target.stats,
            debuffs: [...target.stats.debuffs, spell?.debuff].filter(Boolean) as string[]
        }
    };

    alert( `${caster.name} cast ${spellName}! 
            ${target.name} took ${spellPower} pts of damage!
            ${caster.name} is now channeling ${spellElement}!`
        );


    setBattleState(prev => ({
        ...prev,
        player: prev.currentTurn === "player" ? updatedCaster : updatedTarget,
        enemy: prev.currentTurn === "player" ? updatedTarget : updatedCaster,
        currentTurn: prev.currentTurn === "player" ? "enemy" : "player"
    }));

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
        battleState,
        activeBattler,
        startBattle,
        createBattler,
        determineTurn,
        castSpell
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
