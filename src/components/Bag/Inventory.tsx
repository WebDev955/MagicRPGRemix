//IMPORTS - HOOKS
import { useContext, useState} from "react"
//IMPORTS - COMPONENETS
import Modal from "../UI/Modal"
import Armor from "./Armor"
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
            <Button onClick={closeInventoryHandler}>Close</Button>
            <p>Gold: {playerCtx.bagTest.gold}</p>
            <div className={styles.categorySelctionDiv}>
                <p onClick={()=>displayItems("armor")}>Armor</p>
                <p onClick={()=>displayItems("weapon")}>Weapons</p> 
                <p onClick={()=>displayItems("spell")}>Spell</p> 
                <p onClick={()=>displayItems("potion")}>Recovery</p> 
            </div>
            {renderContent === "armor" && <Armor/>}
            {renderContent === "weapon" && <h1>Weapons Selection</h1>}
            {renderContent === "spell" && <h1>Spells Selection</h1>}
            {renderContent === "potion" && <h1>Potion Selection</h1>}
        </Modal>
    )
}

export default Inventory