//HOOKS
import { useContext} from "react"
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
    //const [viewStats, setViewStats] = useState(false)
    
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
    
    return(
        <>
        <div className={styles.parentDiv}>
             <div className={styles.menuStatsDiv}>
                <h2>{"Harry Potter"}</h2>
                <h3 className={styles.health}>Hp: {playerContext.stats.hp}</h3>
                <h3 className={styles.health}>Df: {playerContext.stats.def}</h3>
                <h3 className={styles.magic}>Magic: {playerContext.stats.mp}</h3>
            </div>
            <div className={styles.menuDivButtons}>
                <Button className={styles.menuButton} onClick={openInventoryHandler}>Bag</Button> 
                    <Inventory/>
                <Button className={styles.menuButton} onClick={openMonsterLog}>Monster Log</Button>
                    <MonsterLog/>
                <Button className={styles.menuButton} onClick={openQuestLog}>Quests</Button>
                    <QuestLog/>
            </div>
        </div>         
        </>
    )
}

export default PlayerStats