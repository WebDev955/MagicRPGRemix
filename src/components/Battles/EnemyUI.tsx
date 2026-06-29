//IMPORTS - HOOKS
import { useContext } from "react"
import { BattleContext } from "../contexts/BattleContext"
//IMPORTS - IMAGES
import Slime from "../../assets/Slime.png"
//IMPORTS - STYLES
import styles from "./EnemyUI.module.css"


const EnemyUI:React.FC = () => {    
//Create Context
    const battleCtx = useContext(BattleContext);
//Derive date from contex
    const enemy = battleCtx.battleState.enemy;
    if (!enemy) return;

    return (
        <div className= {styles.enemyDiv}>
            <div className= {styles.enemyStats}>
                <p>{enemy.name}</p>
                <p>Element: {enemy.element?.element}</p>
                <p>HP: {enemy.stats.hp}</p> 
                <p>Lv: {"3"}</p>
            </div>
            <div className={styles.enemyImgs}>
                <img src={Slime} width = "75px"/>
            </div>
        </div>
    )
}

export default EnemyUI