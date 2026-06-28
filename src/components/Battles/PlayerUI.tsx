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

import BattleTextBox from "./BattleTextBox"


const PlayerUI:React.FC = () => {   
    const battleCtx = useContext(BattleContext)
    const sceneCtx = useContext(SceneContext)
    const player = battleCtx.battleState.player
    const spells = player.spells
    const exitBattle = sceneCtx.exitBattle
    //const lastAction = battleCtx.battleState.lastAction

    const [showSpells, setShowSpells] = useState(false)
    const [selectedSpell, setSelectedSpell] = useState<SpellType | null>(null)


    //const [playerAction, setPlayerAction]  = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)
        setSelectedSpell(null)
    }

    const spellInfoHandler = (spell: SpellType) => {
        setSelectedSpell(spell)
    }

    function handleCastHandler(selectedSpell: SpellType){
        battleCtx.castSpell(selectedSpell)
        setSelectedSpell(null)
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
                <div className={styles.spellSelectionWrapper}>
                    <div className={styles.spellImgs}> 
                        {showSpells && spells.map((spell) =>
                            <figcaption>
                                <img onClick = {() => spellInfoHandler(spell)} id={spell.id} src={StoneTablet} width = "100px"/> 
                                <caption>{spell.name}</caption>
                            </figcaption>          
                        )}
                    </div>
                    <div>
                        {selectedSpell && 
                        
                            <div className={styles.selectedSpellWrapper}id={selectedSpell.id}>
                                <p>{selectedSpell.name}</p>
                                <p>Power: {selectedSpell.power}pts.</p>
                                <p>Effect: {selectedSpell?.effect}</p>
                                <p>Buff: {selectedSpell?.debuff}</p>
                                <p>Debuff: {selectedSpell?.buff}</p>
                                <p className={styles.castBtn}onClick={() => handleCastHandler(selectedSpell)}> Cast Spell! </p>
                            </div>   
                        }
                    </div>
                </div>
            </div>
    ) 
}
export default PlayerUI