import {useState, useContext } from "react"
import {PlayerContext} from "../../contexts/PlayerContext"
import style from "../../UI/Bag/Inventory.module.css"
import type { EquipableItem } from "../../contexts/PlayerContext"
import Button from "../Button"

const InventoryItems = () => {

const [renderContent, setRenderContent] = useState("")
const [renderArmor, setRenderArmor] = useState("")

const playerCtx = useContext(PlayerContext)
const armor = playerCtx.inventoryTest.armor
//const weapons = playerCtx.inventoryTest.weapons
//const spells = playerCtx.inventoryTest.spells
//const potions = playerCtx.inventoryTest.potions

  
      function equipItem(item:EquipableItem){
          playerCtx.equipItem(item)
      }
        function unequipItem(item:EquipableItem){
          playerCtx.unequipItem(item)
      }
  
      const closeInventoryHandler = () => {
          playerCtx.openInventory()
      }
const displayItems = (value:string) => {
 setRenderContent(value)
}

const displayArmor = (value:string) => {
 setRenderArmor(value)
} 

 return (
   <div className={style.itemsWrapperDiv}>
        <div className={style.categorySelctionDiv}>
            <Button onClick={closeInventoryHandler}>Close</Button>
            <p onClick={()=>displayItems("armor")}>Armor</p>
            <p onClick={()=>displayItems("weapon")}>Weapons</p> 
            <p onClick={()=>displayItems("spell")}>Spell</p> 
            <p onClick={()=>displayItems("potion")}>Recovery</p> 
        </div>
            {renderContent === "armor" && 
                <div>
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
        }
    </div>
    )
}
export default InventoryItems
