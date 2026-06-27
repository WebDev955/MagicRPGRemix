//HOOKS
import {useContext, useState} from "react"
//IMPORTS - COMPONENTS
//IMPORT - GRAPHICS 
//STYLES
import styles from "./PlayerInfoMenu.module.css"
//IMPORT - Context
import { PlayerContext } from "../contexts/PlayerContext"
import { SceneContext } from "../contexts/SceneContext"

import Backpack from "../../assets/Backpack.png"
import QuestLogIcon from "../../assets/QuestLog.png"
import MonsterLogIcon from "../../assets/MonsterLog.png"
import Inventory from "./Bag/Inventory"
import QuestLog from "./QuestLog"
import MonsterLog from "./MonsterLog"


const PlayerInfoMenu:React.FC = () => {
    const playerContext = useContext(PlayerContext)
    const sceneCtx = useContext(SceneContext)
    const currentMap = sceneCtx.currentMap
    const mapCord = sceneCtx.playerLocation


        const openInventoryHandler = () =>{
        playerContext.openInventory()
    }
    const openMonsterLog = () => {
        playerContext.openMonsterLog()
    }
    const openQuestLog = () => {
        playerContext.openQuestLog()
    }

    return(
        <div className={styles.parentWrapper}>
            <div className={styles.statsWrapper}>
                <h2>{"Harry Potter"}</h2>
                <h3 className={styles.health}>Hp: {playerContext.stats.hp}</h3>
                <h3 className={styles.health}>Df: {playerContext.stats.def}</h3>
                <h3 className={styles.magic}>Magic: {playerContext.stats.mp}</h3> 
            </div> 
            <div className={styles.location}>
                <p>Location {currentMap} : {mapCord}</p>
            </div>
       </div>
      )
}

export default PlayerInfoMenu