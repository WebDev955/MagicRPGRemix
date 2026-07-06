//IMPORT Hoooks
import { useContext } from "react"
//IMPORTS - COMPONENTS
import ElementsOfMagic from "./ElementsOfMagicGuide"
import Battles from "./BattleGuide"
import Modal from "../../UI/Modal"
//IMPORTS - STYLE
import style from "./PlayersGuide.module.css"
//IMPORTS - CONTEXT 
import { PlayerContext } from "../../contexts/PlayerContext"

const PlayersGuide = () => {
    const playerCtx = useContext(PlayerContext)
    
    const closeGuide= () => {
        playerCtx.openPlayerGuide()
    }

    return (
    <Modal open = {playerCtx.isPlayerGuideOpen} className={style.guideModal}>
        <div className={style.playersGuideWrapper}>
            <button onClick={closeGuide}>Close</button>
            <h1>Player's Guide</h1>
            <p>
                Welcome to Magic RPG! Take on quests, battle monsters, explore maps, and level up like a classic RPG experience on a web
                browser.
            </p>
            <ElementsOfMagic/>
            <Battles/>
        </div>
    </Modal>
    )
}
export default PlayersGuide 
