//IMPORTS - HOOKS
import {useContext} from "react"
//IMPORTS - STYLES
import styles from "./PlayerInfoMenu.module.css"
//IMPORT - CONTEXT
import { PlayerContext } from "../contexts/PlayerContext"
import { SceneContext } from "../contexts/SceneContext"

const PlayerInfoMenu:React.FC = () => {
    //ESTABLSIH CONTEXT
    const playerContext = useContext(PlayerContext)
    const sceneCtx = useContext(SceneContext)
    //DERIVE DATA FROM CONTEXT
    const currentMap = sceneCtx.currentMap
    const mapCord = sceneCtx.playerLocation

    return(
        <div className={styles.parentWrapper}>
            <div className={styles.statsWrapper}>
                <h2>{"Harry Potter"}</h2>
                <h3 className={styles.health}>Hp: {playerContext.stats.hp}</h3>
                <h3 className={styles.health}>Df: {playerContext.stats.def}</h3>
                <h3 className={styles.magic}>Magic: {playerContext.stats.mp}</h3> 
            </div> 
            <div className={styles.location}>
                <p>Location {currentMap} : {mapCord}</p>
            </div>
       </div>
      )
}
export default PlayerInfoMenu