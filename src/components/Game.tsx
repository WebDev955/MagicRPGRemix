import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import PlayerStats from "./UI/PlayerStats"
import styles from "./Game.module.css"


const Game = () => {

 return (
  <div className = {styles.parentDiv}>
    <PlayerStats/>
    <TopScreen/>
    <BottomScreen/>
  </div>
)
}

export default Game
