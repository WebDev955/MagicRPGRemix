import { useContext, useState } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import Modal from "./Modal"

import styles from "./Inventory.module.css"
import style from "./Modal.module.css"
import Button from "./Button"

import type { EquipableItem } from "../contexts/PlayerContext"

const Inventory = () => {
const playerContext = useContext(PlayerContext)!

    const [viewArmor, setViewArmor] = useState(false)



    function equipItem(item:EquipableItem){
        playerContext.equipItem(item)
    }
      function unequipItem(item:EquipableItem){
        playerContext.unequipItem(item)
    }

    const viewArmorHandler = () => {
        setViewArmor(!viewArmor)
    }

    const closeInventoryHandler = () => {
        playerContext.openInventory()
    }

    console.log("Item Equiped:", playerContext.equipedItems)
    
    return(
    <>
    <Modal open = {playerContext.isInventoryOpen} className={style.inventoryModal}>
        <h1>Inventory</h1>
            <Button onClick={closeInventoryHandler}>Close</Button>
            <div className={styles.parentDiv}>
            <div className={styles.armor}>
                        <ul>
                        <h1 onClick={viewArmorHandler}>Armor</h1>
                        {viewArmor && playerContext.inventoryTest.armor.map((armor) =>
                            <li key = {armor.id}>
                                <div className={styles.armorDetails}>
                                    <Button onClick={() => equipItem(armor)}>Equip</Button>
                                    <Button onClick={() => unequipItem(armor)}>Remove</Button>
                                    <h3>{armor.type}</h3> 
                                    <h4>Defesne: {armor.def}</h4>
                                    <h4>Ability: {armor.ability}</h4>
                                </div>
                            </li>
                        )} 
                        </ul>
                </div>
                <div>
                    <ul>
                    <h1>Weapons</h1>
                    {playerContext.inventoryTest.weapons.map((weapon) =>
                        <li key = {weapon.id}>
                            <h3>{weapon.type}</h3>
                            <h4>Power Boost: {weapon.powerBoost}</h4>
                            <h4>Ability: {weapon.ability}</h4>
                        </li>
                    )} 
                    </ul>
                </div>
                <div>
                    <ul>
                    <h1>Potions</h1>
                    {playerContext.inventoryTest.potions.map((potion) =>
                        <li key = {potion.id}>
                            <h3>{potion.type}</h3>
                            <h4>Restore Points: {potion.restorePts}</h4>
                            <h4>Bonus Effect: {potion.bonusEffect}</h4>
                        </li>
                    )} 
                </ul>
            </div>
            <div>
                    <ul>
                    <h1>Spells</h1>
                    {playerContext.inventoryTest.spells.map((spell) =>
                        <li key = {spell.id}>
                            <h3>{spell.name}</h3>
                            <h4>MP: {spell.mp}</h4>
                            <h4>Power: {spell.power}</h4>
                            <h4>Effect: {spell.effect}</h4>
                        </li>
                    )} 
                </ul>
            </div>
        </div>
        </Modal>
    </>
    )
}

export default Inventory