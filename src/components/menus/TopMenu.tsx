//IMPORTS - HOOKS 
import {useContext, useRef, useState} from "react"
//IMPORTS - COMPONENTS
import Inventory from "../Bag/Inventory"
import MonsterLog from "./MonsterLog"
import QuestLog from "./QuestLog"
import PlayerInfoMenu from "./PlayerInfoMenu"

//IMPORT - GRAPHICS 
import Backpack from "../../assets/Backpack.png"
import QuestLogIcon from "../../assets/QuestLog.png"
import MonsterLogIcon from "../../assets/MonsterLog.png"
import GuideBook from "../../assets/GuideBook.svg"
//IMPORTS - STYLES
import styles from "./TopMenu.module.css"
import CastleBg from "../../assets/TheCastle.mp3"
//IMPORT - CONTEXT
import { PlayerContext } from "../contexts/PlayerContext"
import { AccountContext } from "../contexts/AccountContext"
import { castSpell } from "../Battles/battleUtils"
import PlayersGuide from "./PlayersGuide/PlayersGuide"

const TopMenu:React.FC = () => {
    //ESTABLISH STATE
    const [openMenu, setOpenMenu] = useState(false)
    //ESTABLISH CONTEXT
    const playerContext = useContext(PlayerContext)
    const accountCtx = useContext(AccountContext)
    //DERIVE CONTEXT DATA
    const logOut = accountCtx.logOut

    const openInventoryHandler = () =>{
        playerContext.openInventory()
    }
    const openMonsterLog = () => {
        playerContext.openMonsterLog()
    }
    const openQuestLog = () => {
        playerContext.openQuestLog()
    }
    const openPlayerGuide = () => {
        playerContext.openPlayerGuide()
    }
    const openMenuHandler = (boolean:boolean) => {
           console.log("clicked", boolean)
        setOpenMenu(boolean)
    }

    const audioRef = useRef<HTMLAudioElement | null>(null)
   

    const runAudio = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.volume = 0.1
                audioRef.current.play().catch((error) => {
                    console.error("Audio playback failed:", error)
                })
            } else {
                audioRef.current.pause()
            }
        }
    }
       
    return(
        <div className={styles.topScreenMenuWrapper}>
            <audio ref={audioRef} src={CastleBg} loop/> 
            <div className={styles.settings}>
                <p onClick= {() => openMenuHandler(!openMenu)}>Open Menu</p>
                <p onClick ={() => runAudio()}>Toggle Music</p> 
                <p onClick ={() => logOut()}>Logout</p>
            </div>
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
                    <figure className={styles.menuButton} >
                        <img src={GuideBook}onClick={openPlayerGuide} />
                        <figcaption>Player Guide</figcaption>
                        <PlayersGuide/>
                    </figure>
                </div>
            }
             <div>
                <PlayerInfoMenu/>
            </div> 
        </div>         
    )
}

export default TopMenu