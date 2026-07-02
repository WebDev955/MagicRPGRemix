//IMPORTS - HOOKS
import { useContext, useRef, useEffect } from "react"
import { BattleContext } from "../contexts/BattleContext"
//IMPORTS - IMAGES
import Slime from "../../assets/Slime.png"
//IMPORTS - STYLES
import styles from "./EnemyUI.module.css"
import SpellHit from "../../assets/SpellHit.mp3"


const EnemyUI:React.FC = () => {    
//Create Context
    const battleCtx = useContext(BattleContext);
//Derive date from contex
    const enemy = battleCtx.battleState.enemy;
    if (!enemy) return;

    const enemyAttacking =
        battleCtx.battleState.isAttacking && 
        battleCtx.battleState.currentTurn === "enemy"

    return (
        <div className= {styles.enemyDiv}>

            <div className= {styles.enemyStats}>
                <p>{enemy.name}</p>
                <p>Element: {enemy.element?.element}</p>
                <p>HP: {enemy.stats.hp}</p> 
                <p>Lv: {"3"}</p>
            </div>
            <div className={`${styles.enemyImgs} ${enemyAttacking ? styles.enemyAttacking : ""}`}>
                <img src={Slime} width = "75px"/>
            </div>
        </div>
    )
}

export default EnemyUI