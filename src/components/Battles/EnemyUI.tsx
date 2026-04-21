//IMPORTS - Hooks
import { useContext } from "react"
import { BattleContext } from "../contexts/BattleContext"
//IMPORTS - Images
import Slime from "../../assets/Slime.png"
//IMPORTS - STyles
import styles from "./EnemyUI.module.css"
//import 
//IMPORTS - Components

const EnemyUI:React.FC = () => {    
    const battleCtx = useContext(BattleContext)
    const enemy = battleCtx.battleState.enemy
    if (!enemy) return

    return (
        <div className= {styles.enemyDiv}>
            <div className= {styles.enemyStats}>
                <p>{enemy.name}</p>
                <p>Element: {enemy.element}</p>
                <p>HP: {enemy.stats.hp}</p> 
                <p>Lv: {"3"}</p>
            </div>
            <div className={styles.enemyImgs}>
                <img src={Slime} width = "75px"/>
                <img src={Slime} width = "75px"/>
            </div>
        </div>
    )
}

export default EnemyUI