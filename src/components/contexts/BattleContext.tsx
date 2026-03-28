import { createContext, useState} from "react";
import type { ReactNode } from "react";

//IMPORT - Utils
//import createBattlers from "../Battles/battleUtils"


type battleContextType = {
    //battleState: battleState,
    startBattle: () => void;
    battle: boolean;
    //determineTurns: () => void;
    //isBattleOver: () => void,
    //castSpell: () => void,
    //defend: () => void,
    //bag: () => void,
    //run: () => void,
    //rewardsXP: () => void
}

//type battleState = {
    //player: {},
    //enemy: Object,
    //turn: string,
//}

type Props = {
    children: ReactNode;
};


//NO SATE/HOOKS when creating context
//its just a template
export const BattleContext = createContext<battleContextType>({
    //battleState: {
        //playerName: {},
        //enemy: {},
        //turn: "player"// or "enemy",
    //},

    startBattle: () => {},
    battle: false,
    //determineTurns: () => {},
    //isBattleOver: () => {},
    //castSpell: () => {},
    //defend: () => {},
    //bag: () => {},
    //run: () => {},

});

//Only in Provider is where you create functions and estbalish state
const BattleContextProvider = ({children}:Props) => {
    //const [battleState, setBattleState] = useState({
        //player: {},
        //enemy: {},
        //turn: undefined,
    //})

/**********************
  1. BATTLE
***********************/

/****** 1. Initiate Battle *********/
const [battle, setBattle] = useState(false)

const startBattle = () => {
    setBattle(true)
    //createBattlers(player, enemy)
    //determineTurns(btlrPlayer, btlrEnemy)
}

/**********************
 2. BATTLER HELPER FUNCTIONS
***********************/
{/* 
const [activeBattler, setActiveBattler] = useState("")

const determineTurns = (btlrPlayer:Object, btlrEnemy:Object) => {
    if (btlrPlayer.stats.speed > btlrEnemy.stats.speed){
        setActiveBattler(btlrPlayer)
        return btlrPlayer
    } else {
        setActiveBattler(btlrEnemy)
        return btlrEnemy
    }
}

const isBattleOver = (btlrPlayer:Object, btlrEnemy:Object) => {
    if (btlrPlayer.HP === 0){
        return btlrPlayer
    }
    if (btlrEnemy.HP === 0){
        //determineXp()
        //determineRewards() 
        return btlrEnemy
    }
    else { 
        (btlrPlayer.HP && btlrEnemy.HP > 0){
        return 
      }
    }  
}
    
*/}



/**********************
 ACCOUNT CONTEXT OBJECT
***********************/
    const battleCtx: battleContextType = {
        //battleState,
        startBattle,
        battle,
        //determineTurns,
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
