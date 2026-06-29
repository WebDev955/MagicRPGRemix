//IMPORTS - Hooks
import { useRef, useEffect, useContext} from "react"
//IMPORTS - Components
import EnemyUI from "./EnemyUI"
import PlayerUI from "./PlayerUI"
//IMPORT - Context
import { BattleContext } from "../contexts/BattleContext"
import { PlayerContext } from "../contexts/PlayerContext"
import { SceneContext } from "../contexts/SceneContext"
//IMPORT - DATA
import {EnemyList} from "../../data/EnemyData"
import BattleTheme2 from "../../assets/Battle.mp3"
//IMPORTS - STYLES
import styles from "./Battle.module.css"
import BattleTextBox from "./BattleTextBox"

const Battle:React.FC = () => { 
//Context Data   
    const battleCtx = useContext(BattleContext)
    const playerCtx = useContext(PlayerContext)
    const sceneCtx = useContext (SceneContext)
//Derived data to run battle
    const runBattle = battleCtx.startBattle
    const battleReady = battleCtx.battleReady
    const battleEnemy = sceneCtx.battle
    const enemyFound = EnemyList.find((monster) => monster.id === battleEnemy.enemyId)
    const currentTurn = battleCtx.battleState.currentTurn
    const endBattle = battleCtx.battleState.isBattleOver
    const exitBattle = sceneCtx.exitBattle
//End Turn
    const lastAction = battleCtx.battleState.lastAction 
//Audio
    const audioRef = useRef<HTMLAudioElement | null>(null)
//Rendering Effects
//Check for enemy found
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

    },[])
//Check state of battle, determine turn or end battle
    useEffect (() => {
        if (!battleReady) return
        if (!enemyFound) return
        if (endBattle) return 
        const timer = setTimeout (() => {
            if (currentTurn === "enemy") {
                    battleCtx.enemyTurn(enemyFound)
            }
        }, 3000) 
        return () => clearTimeout(timer)
    }, [currentTurn, endBattle])
//End battle 
    useEffect (() => {
        if (!endBattle) return
        const endBattleTimer = setTimeout (() => {
            if (endBattle === true) {
                exitBattle()
        }}, 3000) 
        return () => clearTimeout(endBattleTimer)

    },[endBattle])

    return(
        <>
        {battleReady === true &&
            <div className= {styles.battleWrapperDiv}>
                <audio ref={audioRef} src={BattleTheme2} loop />
                <div className={styles.UiWrapper}>
                    <EnemyUI/>
                    <BattleTextBox/>
                    <PlayerUI/>
                </div>
            </div>    
        }
        </>
    )
}

export default Battle