//IMPORTS - Hooks
import { useState, useContext } from "react"
//IMPORTS - Images
import StoneTablet from "../../assets/StoneTablet.png"
//IMPORTS - Styles
import styles from "./PlayerUI.module.css"

//IMPORTS - Components
import { BattleContext } from "../contexts/BattleContext"
import { SceneContext } from "../contexts/SceneContext"
import type { SpellType } from "../../types/SpellTypes"


const PlayerUI:React.FC = () => {   
    const battleCtx = useContext(BattleContext)
    const sceneCtx = useContext(SceneContext)
    const player = battleCtx.battleState.player
    const spells = player.spells
    const exitBattle = sceneCtx.exitBattle
    //const lastAction = battleCtx.battleState.lastAction

    const [showSpells, setShowSpells] = useState(false)

    //const [playerAction, setPlayerAction]  = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)
    }

    function handleCastHandler(spell: SpellType){
        battleCtx.castSpell(spell)
        setShowSpells(!showSpells)
        //setPlayerAction(!playerAction)
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
                    <p>Channeling: {player.element?.element ?? "None"}</p> 
                </div>
            </div>
                <div className={styles.spellImgs}> 
                    {showSpells && spells.map((spell) =>
                        <img onClick = {() =>handleCastHandler(spell)} id={spell.id} src={StoneTablet} width = "100px"/>  
                    )}
                </div>
            </div>
    ) 
}
export default PlayerUI