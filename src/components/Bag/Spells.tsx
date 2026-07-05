//IMPORTS - HOOKS
import {useContext } from "react"
//IMPORTS - CONTEXT
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLE
import style from "./Spells.module.css"

const InventorySpells = () => {
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const spells = playerCtx.bagTest.spells

return (
   <div className={style.itemsWrapperDiv}>
        <h1><center>- Spells -</center></h1>
        {spells.map((spell) => (
            <div key={spell.id} className={style.selectedCategoryItemWrapper}>
                <div className={style.selectedCategoryItemTitle}>
                    <h2>{spell.name}</h2>
                </div>
                <div>
                    <p>Element: {spell.element.element}</p>
                    <p>MP Cost: {spell.mp}</p>
                    <p>Power: {spell.power}</p>
                    <p>Description: {spell.description}</p>
                </div>
            </div>
            )
        )}
        </div>
    )
}
export default InventorySpells
