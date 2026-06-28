import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import styles from "./Game.module.css"

import Battle from "./Battles/Battle"
import { useContext } from "react"
import { SceneContext } from "./contexts/SceneContext"
import Modal from "./UI/Modal"
import modalStyle from "./UI/Modal.module.css"
 


const Game = () => {

const sceneCtx = useContext(SceneContext)
const battle = sceneCtx.battle


 return (
  <div className = {styles.gameParentDiv}>
    <section className={styles.topScreen}><TopScreen/></section>
    <section className={styles.bottomScreen}><BottomScreen/></section>
    <Modal open = {battle?.battleActive === true} className={modalStyle.battleModal}>
      {battle?.battleActive === true && <Battle/>}
    </Modal> 
  </div>
)
}

export default Game
