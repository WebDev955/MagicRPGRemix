//! How Battles Work
    //* 1. A player selects a battle grid space 
        //TODO <Div onClick={() = startBattle(player, enemy)}/>
    //* 2. Create Battlers with player and enemy data 
        //TODO const createBattler(player||enemy), return btlrPlayer and btlrEnemy
    //* 3. Run Battle
        //TODO const runBattle = (btlrPlayer, btlrEnemy)
        //* 4. Determine Turns
            //TODO const determineTurns=(btlrPlayer, btlrEnemy), while loop 
        //* 5. Attack/Cast spell
            //TODO const castSpell = (caster, target, spell)
        //* 6. Check if battle is over
            //TODO const isBattleOver = (btlrPlayer, btlrEnemy)
        //* 7 Reward / Level up
            //TODO const levelUpReward()//IMPORT - HOOKS

//import { useContext } from "react"

//IMPORTS - UI
import EnemyUI from "./EnemyUI"
import PlayerUI from "./PlayerUI"

//Imports - Contexts
//import BattleContext from "../contexts/BattleContext"

const BattleTest:React.FC = () => {
    //const battleCtx = useContext(BattleContext)
    return (   
        <>
            <EnemyUI/>
            <PlayerUI/>
        </>
    )
}


export default  BattleTest

