//HOOKS
import {useContext, useState} from "react"
//IMPORTS - COMPONENTS
import Inventory from "./Bag/Inventory"
import MonsterLog from "./MonsterLog"
import QuestLog from "./QuestLog"
import PlayerInfoMenu from "./PlayerInfoMenu"
//IMPORT - GRAPHICS 
import Backpack from "../../assets/Backpack.png"
import QuestLogIcon from "../../assets/QuestLog.png"
import MonsterLogIcon from "../../assets/MonsterLog.png"
//STYLES
import styles from "./TopMenu.module.css"
//IMPORT - Context
import { PlayerContext } from "../contexts/PlayerContext"

const TopMenu:React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false)

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
    const openMenuHandler = (boolean:boolean) => {
           console.log("clicked", boolean)
        setOpenMenu(boolean)
    }
    
    return(
        <div className={styles.topScreenMenuWrapper}>
            <div>
                <PlayerInfoMenu/>
            </div>  
            <p onClick= {() => openMenuHandler(!openMenu)}>Open Menu</p>
            {openMenu &&
                <div className={styles.menuDivButtons}>
                    <figure className={styles.menuButton}>
                        <img src={Backpack}onClick={openInventoryHandler} />
                        <figcaption>Bag</figcaption>
                        <Inventory/>
                    </figure>
                    <figure className={styles.menuButton}>
                        <img src={MonsterLogIcon}onClick={openMonsterLog} /> 
                        <figcaption>Monster Log</figcaption>
                        <MonsterLog/>
                    </figure>  
                    <figure className={styles.menuButton} >
                        <img src={QuestLogIcon}onClick={openQuestLog} />
                        <figcaption>Quests</figcaption>
                        <QuestLog/>
                    </figure>
                </div>
            }
        </div>         
    )
}

export default TopMenu