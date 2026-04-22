//IMPORTS - Hooks
import { useState, useContext } from "react"
//IMPORTS - Images
import StoneTablet from "../../assets/StoneTablet.png"
//IMPORTS - Styles
import styles from "./PlayerUI.module.css"

//IMPORTS - Components
import { BattleContext } from "../contexts/BattleContext"
import { SceneContext } from "../contexts/SceneContext"
import type { spell } from "./battleUtils"


const PlayerUI:React.FC = () => {   
    const battleCtx = useContext(BattleContext)
    const sceneCtx = useContext(SceneContext)
    const player = battleCtx.battleState.player
    const playerElement = player.element
    const spells = player.spells
    const exitBattle = sceneCtx.exitBattle
    //const potions = player.potions

    const [showSpells, setShowSpells] = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)   
    }

    function handleCastHandler(spell: spell){
        battleCtx.castSpell(spell)
        setShowSpells(!showSpells)
        alert("Enemy Turn!")
    }

    const runHandler = () => {
        exitBattle()
    }

    return (
        <div className= {styles.playerDiv}> 
            <div className= {styles.playerBtlMenu}>
                <div className= {styles.playerOptions}>
                    <button onClick={displaySpells}>Cast</button>
                    <button>Def</button>
                    <button>Bag</button>
                    <button onClick={runHandler}>Run</button>
                </div>
                <div className= {styles.playerStats}>
                    <p>HP: {player.stats.hp}</p>
                    <p>MP: {player.stats.mp}</p>
                    <p>Channeling: {playerElement} </p> 
                </div>
            </div>
                <div className={styles.spellImgs}> 
                    {showSpells && spells.map((spell) =>
                        <img onClick = {() =>handleCastHandler(spell)} id={spell.spellId} src={StoneTablet} width = "100px"/>  
                    )}
                </div>
            </div>
    ) 
}
export default PlayerUI