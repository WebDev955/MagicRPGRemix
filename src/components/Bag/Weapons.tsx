//IMPORTS - HOOKS
import {useState, useContext } from "react"
//IMPORTS - CONTEXT
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "./Weapons.module.css"
//IMPORTS - TYPES/DATA
import type { EquipableItem } from "../../data/PlayerData"

const InventoryWeapons = () => {
    //ESTABLISH DEFAULT STATE
    const [renderWeapon, setRenderWeapon] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const weapons = playerCtx.bagTest.weapons

    function equipItem(item:EquipableItem){
        playerCtx.equipItem(item)
    }
    function unequipItem(item:EquipableItem){
        playerCtx.unequipItem(item)
    }
    const isEquipped = (item:EquipableItem) => playerCtx.equipedItems.some((i) => i.id === item.id)
    const displayWeapon = (value:string) => {
        setRenderWeapon(value)
    }

return (
   <div className={style.itemsWrapperDiv}>
            <div className={style.categorySubMenu}>
                <p onClick={()=> displayWeapon("wand")} className={renderWeapon === "wand" ? style.subMenuActive : ""}>Wand</p>
                <p onClick={()=> displayWeapon("staff")} className={renderWeapon === "staff" ? style.subMenuActive : ""}>Staff</p>
            </div>
        {renderWeapon === "wand" && (
            weapons.filter(weapon => weapon.category === renderWeapon).map((wand) => (
                <div key={wand.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{wand.name}</h2>
                            <p onClick={() => equipItem(wand)} className={isEquipped(wand) ? style.equipActive : ""}>Equip</p>
                            <p onClick={() => unequipItem(wand)}>Unequip</p>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Power Boost: {wand.powerBoost}</p>
                            <p>Ability: {wand.ability}</p>
                            <p>Description: {wand.description}</p>
                        </div>
                    </div>
                    )
                )
            )
        }
        {renderWeapon === "staff" && (
            weapons.filter(weapon => weapon.category === renderWeapon).map((staff) => (
                <div key={staff.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{staff.name}</h2>
                            <p onClick={() => equipItem(staff)} className={isEquipped(staff) ? style.equipActive : ""}>Equip</p>
                            <p onClick={() => unequipItem(staff)}>Unequip</p>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Power Boost: {staff.powerBoost}</p>
                            <p>Ability: {staff.ability}</p>
                            <p>Description: {staff.description}</p>
                        </div>
                    </div>
                    )
                )
            )
        }
        </div>
    )
}
export default InventoryWeapons
