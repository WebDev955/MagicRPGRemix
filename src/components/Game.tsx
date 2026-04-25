import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import styles from "./Game.module.css"
import PlayerStats from "./UI/PlayerStats"


const Game = () => {

 return (
  <div className = {styles.parentDiv}>
    <TopScreen/>
    <PlayerStats/>
    <BottomScreen/>
  </div>
)
}

export default Game
