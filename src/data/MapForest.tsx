
//IMPORT - Hooks
import {useContext} from "react"
//IMPORT - Context
import {SceneContext} from "../components/contexts/SceneContext"
//IMPORT Data
import {forestMapArray, castleMapArray} from "./MapData";
//import Forest from "../assets/Forest.jpg"
import style from "./Map.module.css"
import PlayerIcon from "../assets/PlayerIcon.png"
//IMPORT - Images
//import Forest from "../assets/Forest.jpg"

export const CastleMap:React.FC = () => {
    const scene = useContext(SceneContext);
    const playerLocation = scene.playerLocation

    const cellEvent = (eventType:string|null, sceneId: string, bgImg: string,
	    npcId:string|null, enemyId: string|null, villageId: string|null, mapType: string, gridCord:string) => {
        console.log("clicked:", gridCord, "eventType:", eventType)
        if (eventType === "battle"){
            if (enemyId) {
                scene.renderBattle(enemyId, gridCord)
            } else {console.log("Battle cell has no enemyId assigned")
                
            }
            
        } else {
            scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType, gridCord)
            alert(`You moved to spot ${gridCord}`)
        }
    }

    return (
        <div className={style.parentDiv_Castle}>
            <div className={style.gridDiv}>
                {castleMapArray.map((row)=> 
                    <div className = {style.row}>
                        {row.map((cell) =>
                            <div 
                                key = {cell.gridCord} 
                                onClick = {() => cellEvent (
                                    cell.eventType, cell.sceneId, cell.bgImg, cell.npcId,
                                    cell.enemyId, cell.villageId, cell.mapType, cell.gridCord
                                )} 
                                className={style.cell}
                                >
                            {cell.gridCord === playerLocation && ( 
                                <img src={PlayerIcon} width={24} height={24} />
                            )}
                           </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export const ForestMap:React.FC = () => {
    const scene = useContext(SceneContext);
     const playerLocation = scene.playerLocation

    const cellEvent = (eventType:string|null, sceneId: string, bgImg: string,
	    npcId:string|null, enemyId: string|null, villageId: string|null, mapType:string, gridCord: string) => {
 
        if (eventType === "battle"){
            if (enemyId) {
                scene.renderBattle(enemyId, gridCord)
            } else {console.log("Battle cell has no enemyId assigned")}
        } else {
            scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType, gridCord)
            alert(`You moved to spot ${gridCord}`)
        }
    }
return (
           <div className={style.parentDiv_Forest}>
            <div className={style.gridDiv}>
                {forestMapArray.map((row)=> 
                    <div className = {style.row}>
                        {row.map((cell) =>
                            <div 
                                key = {cell.gridCord} 
                                className={style.cell}
                                onClick = {(e) =>{
                                e.preventDefault()
                                cellEvent (cell.eventType, cell.sceneId, cell.bgImg, cell.npcId,
                                    cell.enemyId, cell.villageId, cell.mapType, cell.gridCord
                                    )
                                }}
                            >
                            {cell.gridCord === playerLocation && ( 
                                <img src={PlayerIcon} width={24} height={24} />
                            )}
                           </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}