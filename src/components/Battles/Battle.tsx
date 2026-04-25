//IMPORTS - Hooks
import { useRef, useEffect, useContext} from "react"

//IMPORTS - Components
import EnemyUI from "./EnemyUI"
import PlayerUI from "./PlayerUI"

//IMPORT - Context
import { BattleContext } from "../contexts/BattleContext"
import { PlayerContext } from "../contexts/PlayerContext"
import { SceneContext } from "../contexts/SceneContext"
import {EnemyList} from "../../data/EnemyData"

//IMPORTS - Images

//import BattleTheme from "../../assets/Normal  Battle.mp3"
import BattleTheme2 from "../../assets/Battle.mp3"

//IMPORTS - STyles
import styles from "./Battle.module.css"

//IMPORTS - Components
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
            //TODO const levelUpReward()

const Battle:React.FC = () => { 
    //Context Data   
    const battleCtx = useContext(BattleContext)
    const playerCtx = useContext(PlayerContext)
    const sceneCtx = useContext (SceneContext)

    //Data to run battle
    const runBattle = battleCtx.startBattle
    const battleReady = battleCtx.battleReady
    const battleEnemy = sceneCtx.battle
    const enemyFound = EnemyList.find((monster) => monster.monsterId === battleEnemy.enemyId)

    //Audio
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (!enemyFound) {
            console.warn("Enemy not found:", battleEnemy.enemyId)
            return
        }
        runBattle(playerCtx, enemyFound)
        if (audioRef.current) {
            audioRef.current.volume = 0.1
            audioRef.current.play()
        }
    },[battleReady])

    return(
        <>
        {battleReady === true &&
            <div className= {styles.parentDiv}>
                <audio ref={audioRef} src={BattleTheme2} loop />
                <EnemyUI/>
                <PlayerUI/>
            </div>
        }
        </>

    )
    
}

export default Battle