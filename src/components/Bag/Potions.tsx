//IMPORTS - HOOKS
import {useState, useContext } from "react"
//IMPORTS - CONTEXT
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "./Potions.module.css"

const InventoryPotions = () => {
    //ESTABLISH DEFAULT STATE
    const [renderPotion, setRenderPotion] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const potions = playerCtx.bag.potions

    const displayPotion = (value:string) => {
        setRenderPotion(value)
    }

return (
   <div className={style.itemsWrapperDiv}>
            <div className={style.categorySubMenu}>
                <p onClick={()=> displayPotion("Hp Restore")} className={renderPotion === "Hp Restore" ? style.subMenuActive : ""}>Hp Restore</p>
                <p onClick={()=> displayPotion("Magic Restore")} className={renderPotion === "Magic Restore" ? style.subMenuActive : ""}>Magic Restore</p>
            </div>
        {renderPotion === "Hp Restore" && (
            potions.filter(potion => potion.category === renderPotion).map((potion) => (
                <div key={potion.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{potion.name}</h2>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Restore Points: {potion.restorePts}</p>
                            <p>Bonus Effect: {potion.bonusEffect}</p>
                        </div>
                    </div>
                    )
                )
            )
        }
        {renderPotion === "Magic Restore" && (
            potions.filter(potion => potion.category === renderPotion).map((potion) => (
                <div key={potion.id} className={style.selectedCategoryItemWrapper}>
                    <div className={style.selectedCategoryItemTitle}>
                        <h2>{potion.name}</h2>
                        </div>
                        <div className={style.selectedCategoryItemDetails}>
                            <p>Restore Points: {potion.restorePts}</p>
                            <p>Bonus Effect: {potion.bonusEffect}</p>
                        </div>
                    </div>
                    )
                )
            )
        }
        </div>
    )
}
export default InventoryPotions
