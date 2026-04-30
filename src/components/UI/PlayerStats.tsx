//HOOKS
import { useContext, useState} from "react"
//COMPONENT IMPORTS
import Inventory from "./Bag/Inventory"
import MonsterLog from "./MonsterLog"
import QuestLog from "./QuestLog"
import Button from "./Button"
//import Modal from "./Modal"

//COMPONENT IMPORTS - CONTEXTS
//import { PlayerContext } from "../Contexts/PlayerContext"

//STYLES
import styles from "./PlayerStats.module.css"

//IMPORT - Context
import { PlayerContext } from "../contexts/PlayerContext"

const PlayerStats:React.FC = () => {
    const [viewStats, setViewStats] = useState(false)
    
    const playerContext = useContext(PlayerContext)

    const openInventoryHandler = () =>{
        playerContext.openInventory()
    }
    const openMonsterLog = () => {
        playerContext.openMonsterLog()
    }
    const openQuestLog = () => {
        playerContext.openQuestLog()
    }
    const viewStatsHandler = () => {
        setViewStats(!viewStats)
    }


    return(
        <>
        <p onClick = {viewStatsHandler}>Adventure Log</p>

        {viewStats &&
        <div className={styles.parentDiv}>
            <div className={styles.menuDivButtons}>
                <h2>{playerContext.playerName}</h2>
                <Button onClick={openInventoryHandler}>Open Bag</Button>
                <Button onClick={openMonsterLog}>View Monster Log</Button>
                <Button onClick={openQuestLog}>View Quest Log</Button>
                <Inventory/>
                <MonsterLog/>
                <QuestLog/>
            </div>
            <div className={styles.menuStatsDiv}>
                <h3 className={styles.health}>Hp: {playerContext.stats.hp}</h3>
                <h3 className={styles.health}>Df: {playerContext.stats.def}</h3>
                <h3 className={styles.magic}>Magic: {playerContext.stats.mp}</h3>
                <h3 className={styles.gold}>Gold: {playerContext.bagTest.gold}</h3>
            </div>
        </div>
        }
        </>
    )
}

export default PlayerStats