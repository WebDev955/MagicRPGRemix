//IMPORTS - Hooks
import { useState, useContext } from "react"
//IMPORTS - Images
import StoneTablet from "../../assets/StoneTablet.png"
//IMPORTS - Styles
import styles from "./PlayerUI.module.css"

//IMPORTS - Components
import { PlayerContext } from "../contexts/PlayerContext"
//import { BattleContext } from "../contexts/BattleContext"


const PlayerUI:React.FC = () => {   
    const playerCtx = useContext(PlayerContext)
    //const battleCtx = useContext(BattleContext)
    

    const [showSpells, setShowSpells] = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)   
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
                    <p>HP:  {playerCtx.stats.hp}</p>
                    <p>MP: {playerCtx.stats.mp}</p>
                    <p>Channeling: {playerCtx.stats.channeledElement} </p> 
                </div>
            </div> 
            {showSpells && (
                <div className={styles.spellImgs}>
                    <img src={StoneTablet} width = "100px"/>
                    <img src={StoneTablet} width = "100px"/>
                    <img src={StoneTablet} width = "100px"/>
                    <img src={StoneTablet} width = "100px"/>
                </div>
            )}
        </div>
    )
    
}

export default PlayerUI