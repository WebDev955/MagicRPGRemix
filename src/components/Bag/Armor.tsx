//IMPORTS - HOOKS
import {useState, useContext } from "react"
//IMPORTS - CONTEXT
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "./Armor.module.css"
//IMPORTS - TYPES/DATA
import type { EquipableItem } from "../../data/PlayerData"

const InventoryItems = () => {
    //ESTABLISH DEFAULT STATE
    const [renderArmor, setRenderArmor] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const armor = playerCtx.bag.armor
    //const weapons = playerCtx.inventoryTest.weapons
    //const spells = playerCtx.inventoryTest.spells
    //const potions = playerCtx.inventoryTest.potions

    function equipItem(item:EquipableItem){
        playerCtx.equipItem(item)
    }
    function unequipItem(item:EquipableItem){
        playerCtx.unequipItem(item)
    }
    const isEquipped = (item:EquipableItem) => playerCtx.equipedItems.some((i) => i.id === item.id)
    const displayArmor = (value:string) => {
        setRenderArmor(value)
    } 

return (
   <div className={style.itemsWrapperDiv}>
            <div className={style.categorySubMenu}>
                <p onClick={()=> displayArmor("Hats")} className={renderArmor === "Hats" ? style.subMenuActive : ""}>Hats</p>
                <p onClick={()=> displayArmor("Glasses")} className={renderArmor === "Glasses" ? style.subMenuActive : ""}>Glasses</p>
                <p onClick={()=> displayArmor("Robes")} className={renderArmor === "Robes" ? style.subMenuActive : ""}>Robes</p>
                <p onClick={()=> displayArmor("Boots")} className={renderArmor === "Boots" ? style.subMenuActive : ""}>Boots</p>
            </div>
        {renderArmor === "Hats" && (
            armor.filter(armor => armor.category === renderArmor).map((hat) => (
                <div key={hat.id}className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{hat.name}</h2>
                        <p onClick={() => equipItem(hat)} className={isEquipped(hat) ? style.equipActive : ""}>Equip</p>
                        <p onClick={() => unequipItem(hat)}>Unequip</p>
                    </div>
                    <div className={style.selectedCategoryItemDetails}>
                        <p>Defense: {hat.def}</p>
                        <p>Ability: {hat.ability}</p>
                        <p>Description: {hat.description}</p>
                    </div>
                </div>
                    )
                )
            )  
        }
        {renderArmor === "Glasses" && (
            armor.filter(armor => armor.category === renderArmor).map((glasses) => (
                <div key={glasses.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{glasses.name}</h2>
                            <p onClick={() => equipItem(glasses)} className={isEquipped(glasses) ? style.equipActive : ""}>Equip</p>
                            <p onClick={() => unequipItem(glasses)}>Unequip</p>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Defense: {glasses.def}</p>
                            <p>Ability: {glasses.ability}</p>
                            <p>Description: {glasses.description}</p>
                        </div>
                    </div>
                    )
                )
            )  
        }
        {renderArmor === "Robes" && (
            armor.filter(armor => armor.category === renderArmor).map((robe) => (
                <div key={robe.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{robe.name}</h2>
                            <p onClick={() => equipItem(robe)} className={isEquipped(robe) ? style.equipActive : ""}>Equip</p>
                            <p onClick={() => unequipItem(robe)}>Unequip</p>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Defense: {robe.def}</p>
                            <p>Ability: {robe.ability}</p>
                            <p>Description: {robe.description}</p>
                        </div>
                    </div>
                    )
                )
            )  
        }
        {renderArmor === "Boots" && (
            armor.filter(armor => armor.category === renderArmor).map((boot) => (
                <div key={boot.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{boot.name}</h2>
                            <p onClick={() => equipItem(boot)} className={isEquipped(boot) ? style.equipActive : ""}>Equip</p>
                            <p onClick={() => unequipItem(boot)}>Unequip</p>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Defense: {boot.def}</p>
                            <p>Ability: {boot.ability}</p>
                            <p>Description: {boot.description}</p>
                        </div>
                    </div>
                        )
                    )
                )  
            }                                  
        </div>
    )
}
export default InventoryItems
