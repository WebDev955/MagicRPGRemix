//HOOKS
import {useContext, useState} from "react"
//IMPORTS - COMPONENTS
//IMPORT - GRAPHICS 
//STYLES
import style from "./PlayerInfoMenu.module.css"
//IMPORT - Context
import { PlayerContext } from "../contexts/PlayerContext"
import { SceneContext } from "../contexts/SceneContext"

const PlayerInfoMenu:React.FC = () => {
    const playerContext = useContext(PlayerContext)
    const sceneCtx = useContext(SceneContext)
    const currentMap = sceneCtx.currentMap
    const mapCord = sceneCtx.playerLocation

    return(
        <div className={style.parentDiv}>
            <div className={style.nameAndStats}>
                <h2>{"Harry Potter"}</h2>
                <div className={style.menuStatsDiv}>
                    <h3 className={style.health}>Hp: {playerContext.stats.hp}</h3>
                    <h3 className={style.health}>Df: {playerContext.stats.def}</h3>
                    <h3 className={style.magic}>Magic: {playerContext.stats.mp}</h3>
                </div>
            </div>
            <p>Current Map: {currentMap} : {mapCord}</p>
       </div>
      )
}

export default PlayerInfoMenu