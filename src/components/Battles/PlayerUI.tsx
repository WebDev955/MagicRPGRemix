//IMPORTS - Hooks
import { useState, useContext, useRef } from "react"
//IMPORTS - Images
import StoneTablet from "../../assets/StoneTablet.png"
//IMPORTS - Styles
import styles from "./PlayerUI.module.css"
import SpellHit from "../../assets/SpellHit.mp3"
//IMPORTS - Components
import { BattleContext } from "../contexts/BattleContext"
import { SceneContext } from "../contexts/SceneContext"
import { PlayerContext } from "../contexts/PlayerContext"
import type { SpellType } from "../../types/SpellTypes"

const PlayerUI:React.FC = () => {   
//Establish Default States
    const [showSpells, setShowSpells] = useState(false)
    const [selectedSpell, setSelectedSpell] = useState<SpellType | null>(null)
//Context
    const battleCtx = useContext(BattleContext)
    const sceneCtx = useContext(SceneContext)
//Derive data from context
    const player = battleCtx.battleState.player
    const spells = player.spells
    const exitBattle = sceneCtx.exitBattle

//FUNCTIONS
    //Sepll selection
    function displaySpells(){
        setShowSpells(!showSpells)
        setSelectedSpell(null)
    }
    //Sepll info based on selected spell
    const spellInfoHandler = (spell: SpellType) => {
        setSelectedSpell(spell)
    }
    const attackAudio = useRef<HTMLAudioElement | null>(null)

    //Cast spell on target
    function handleCastHandler(selectedSpell: SpellType){
        battleCtx.castSpell(selectedSpell)
        setSelectedSpell(null)
        setShowSpells(!showSpells)
        //setPlayerAction(!playerAction)
        
        if (attackAudio.current) {
                attackAudio.current.volume = 0.1
                attackAudio.current.play()
            }  

    }
    const runHandler = () => {
        exitBattle()
    }

    return (
        <div className= {styles.playerDiv}>
            <audio ref={attackAudio} src={SpellHit}/>
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