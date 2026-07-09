//IMPORTS - HOOKS
import { useContext, useState} from "react"
//IMPORTS - COMPONENETS
import Modal from "../UI/Modal"
import Armor from "./Armor"
import Weapons from "./Weapons"
import Spells from "./Spells"
import Potions from "./Potions"
import Button from "../UI/Button"
//IMPORTS - CONTEXT
import { PlayerContext } from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "../UI/Modal.module.css"
import styles from "./Inventory.module.css"

const Inventory = () => {
    //ESTABLISH STATE
    const [renderContent, setRenderContent]= useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)

    const closeInventoryHandler = () => {
          playerCtx.openInventory()
      }
    //DISPLAY CATEGORY BASED ON ITEM TYPE SELECTED
    const displayItems = (value:string) => {
        setRenderContent(value)
    }

const playerContext = useContext(PlayerContext)!

    return(
        <Modal open = {playerContext.isInventoryOpen} className={style.inventoryModal}>
        <main className={styles.inventoryWrapper}>
            <div className={styles.topBarDiv}>
                <Button onClick={closeInventoryHandler} className={styles.closeButton}>Close</Button>
                <p className={styles.goldStat}>Gold: {playerCtx.bagTest.gold}</p>
            </div>
            <div className={styles.playerStatsDiv}>
                <p className={styles.hpStat}>HP: {playerCtx.stats.hp}</p>
                <p className={styles.defStat}>Def: {playerCtx.stats.def}</p>
                <p className={styles.magicStat}>Magic: {playerCtx.stats.mp}</p>
            </div>
            <div className={styles.categorySelctionDiv}>
                <p onClick={()=>displayItems("armor")} className={renderContent === "armor" ? styles.categoryActive : ""}>Armor</p>
                <p onClick={()=>displayItems("weapon")} className={renderContent === "weapon" ? styles.categoryActive : ""}>Weapons</p>
                <p onClick={()=>displayItems("spell")} className={renderContent === "spell" ? styles.categoryActive : ""}>Spell</p>
                <p onClick={()=>displayItems("potion")} className={renderContent === "potion" ? styles.categoryActive : ""}>Potions</p>
            </div>
            {renderContent === "armor" && <Armor/>}
            {renderContent === "weapon" && <Weapons/>}
            {renderContent === "spell" && <Spells/>}
            {renderContent === "potion" && <Potions/>}
        </main>
        </Modal>
    )
}

export default Inventory