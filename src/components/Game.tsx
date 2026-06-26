import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import styles from "./Game.module.css"
import TopMenu from "./UI/TopMenu"


const Game = () => {

 return (
  <div className = {styles.parentDiv}>
    <section className={styles.flexChild}><TopMenu/></section>
    <section className={styles.flexChild}><TopScreen/></section>
    <section className={styles.flexChild}><BottomScreen/></section>
  </div>
)
}

export default Game
