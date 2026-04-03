//IMPORTS - Hooks
import { useState, useContext } from "react"
//IMPORTS - Images
import StoneTablet from "../../assets/StoneTablet.png"
//IMPORTS - Styles
import styles from "./PlayerUI.module.css"

//IMPORTS - Components
import { PlayerContext } from "../contexts/PlayerContext"
import { BattleContext } from "../contexts/BattleContext"
import type { spell } from "./battleUtils"


const PlayerUI:React.FC = () => {   
    const playerCtx = useContext(PlayerContext)
    
    const battleCtx = useContext(BattleContext)
    const [showSpells, setShowSpells] = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)   
    }

    function handleCastHandler(spell: spell){
        battleCtx.castSpell(
            spell
        )
        setShowSpells(!showSpells)
        alert("Enemy Turn!")
    }

    return (
        <div className= {styles.playerDiv}> 
            <div className= {styles.playerBtlMenu}>
                <div className= {styles.playerOptions}>
                    <button onClick={displaySpells}>Cast</button>
                    <button>Def</button>
                    <button>Bag</button>
                    <button>Run</button>
                </div>
                <div className= {styles.playerStats}>
                    <p>HP: {playerCtx.stats.hp}</p>
                    <p>MP: {playerCtx.stats.mp}</p>
                    <p>Channeling: {playerCtx.stats.channeledElement} </p> 
                </div>
            </div> 
            {showSpells && playerCtx.inventoryTest.spells.map((spell) =>
                <div className={styles.spellImgs}>
                    <img onClick = {() =>handleCastHandler(spell)} id={spell.id} src={StoneTablet} width = "100px"/>
                </div>
        )}
        </div>
    )
    
}

export default PlayerUI