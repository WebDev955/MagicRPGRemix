import { useContext} from "react"
import { PlayerContext } from "../../contexts/PlayerContext"
import Modal from "../Modal"
import Armor from "../Bag/Armor"

import style from "../Modal.module.css"

const Inventory = () => {
const playerContext = useContext(PlayerContext)!
    
    return(
    <>
    <Modal open = {playerContext.isInventoryOpen} className={style.inventoryModal}>
        <Armor/>
    </Modal>
    </>
    )
}

export default Inventory