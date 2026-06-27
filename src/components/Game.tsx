import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import styles from "./Game.module.css"


const Game = () => {

 return (
  <div className = {styles.gameParentDiv}>
    <section className={styles.topScreen}><TopScreen/></section>
    <section className={styles.bottomScreen}><BottomScreen/></section>
  </div>
)
}

export default Game
