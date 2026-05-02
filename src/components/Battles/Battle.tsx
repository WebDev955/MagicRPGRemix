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
//import BattleTheme from "../../assets/Normal  Battle.mp3"
import BattleTheme2 from "../../assets/Battle.mp3"
//IMPORTS - STYLES
import styles from "./Battle.module.css"

const Battle:React.FC = () => { 
    //Context Data   
    const battleCtx = useContext(BattleContext)
    const playerCtx = useContext(PlayerContext)
    const sceneCtx = useContext (SceneContext)

    //Data to run battle
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
            <div className= {styles.parentDiv}>
                <audio ref={audioRef} src={BattleTheme2} loop />
                <EnemyUI/>
                <PlayerUI/>
                {lastAction && (
                    <p>{lastAction.caster} cast {lastAction.spellName} on {lastAction.targetName}. It hit for {lastAction.damageDealt} points!</p>
                )}
            
            </div>

             
        }
        </>

    )
    
}

export default Battle