//IMPORTS - Hooks
//IMPORTS - Images
import Slime from "../../assets/Slime.png"
//IMPORTS - STyles
import styles from "./EnemyUI.module.css"


//IMPORTS - Components


const EnemyUI:React.FC = () => {    
    return (
        <div className= {styles.enemyDiv}>
            <div className= {styles.enemyStats}>
                <p>{"Slime"}</p>
                <p>Element: {"None"}</p>
                <p>HP: {"10"}</p> 
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