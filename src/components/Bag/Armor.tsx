//IMPORTS - HOOKS
import {useState, useContext } from "react"
//IMPORTS - COMPONENTS
import Button from "../UI/Button"
//IMPORTS - CONTEXT
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "./Inventory.module.css"
//IMPORTS - TYPES/DATA
import type { EquipableItem } from "../../data/PlayerData"

const InventoryItems = () => {
    //ESTABLISH DEFAULT STATE
    const [renderArmor, setRenderArmor] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const armor = playerCtx.bagTest.armor
    //const weapons = playerCtx.inventoryTest.weapons
    //const spells = playerCtx.inventoryTest.spells
    //const potions = playerCtx.inventoryTest.potions

    function equipItem(item:EquipableItem){
        playerCtx.equipItem(item)
    }
    function unequipItem(item:EquipableItem){
        playerCtx.unequipItem(item)
    }
    const displayArmor = (value:string) => {
        setRenderArmor(value)
    } 

return (
   <div className={style.itemsWrapperDiv}>
        <h1><center>- Armor -</center></h1>
            <div className={style.categorySubMenu}> 
                <p onClick={()=> displayArmor("Hats")}>Hats</p>
                <p onClick={()=> displayArmor("Glasses")}>Glasses</p>
                <p onClick={()=> displayArmor("Robes")}>Robes</p>
                <p onClick={()=> displayArmor("Boots")}>Boots</p>
            </div>
        {renderArmor === "Hats" && (
            armor.filter(armor => armor.category === renderArmor).map((hat) => (
                <div key={hat.id}className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{hat.name}</h2>
                            <p onClick={() => equipItem(hat)}>Equip</p>
                            <p onClick={() => unequipItem(hat)}>Unequip</p>
                        </div>
                        <div>
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
                <div key={glasses.id}>
                    <div>
                        <h2>{glasses.name}</h2>
                            <Button onClick={() => equipItem(glasses)}>Equip</Button>
                            <Button onClick={() => unequipItem(glasses)}>Equip</Button>
                        </div>
                        <div>
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
                <div key={robe.id}>
                    <div>
                        <h2>{robe.name}</h2>
                            <Button onClick={() => equipItem(robe)}>Equip</Button>
                            <Button onClick={() => unequipItem(robe)}>Equip</Button>
                        </div>
                        <div>
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
                <div key={boot.id}>
                    <div>
                        <h2>{boot.name}</h2>
                            <Button onClick={() => equipItem(boot)}>Equip</Button>
                            <Button onClick={() => unequipItem(boot)}>Equip</Button>
                        </div>
                        <div>
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
