import { useContext, useState} from "react"
import { PlayerContext } from "../../contexts/PlayerContext"
import Modal from "../Modal"
import Armor from "../Bag/Armor"
import Button from "../Button"

import style from "../Modal.module.css"
import styles from "../../UI/Bag/Inventory.module.css"
const Inventory = () => {
    const [renderContent, setRenderContent]= useState("")
    const playerCtx = useContext(PlayerContext)

    const closeInventoryHandler = () => {
          playerCtx.openInventory()
      }

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