
//IMPORT - Hooks
import {useContext} from "react"
//IMPORT - Context
import {SceneContext} from "../components/contexts/SceneContext"
//IMPORT Data
import {forestMapArray, castleMapArray} from "./MapData";
//import Forest from "../assets/Forest.jpg"
import style from "./Map.module.css"
//IMPORT - Images
//import Forest from "../assets/Forest.jpg"

export const CastleMap:React.FC = () => {
    const scene = useContext(SceneContext);

    const cellEvent = (eventType:string|null, sceneId: string, bgImg: string,
	    npcId:string|null, enemyId: string|null, villageId: string|null, mapType: string) => {
       
        if (eventType === "battle"){
            if (enemyId) {
                scene.renderBattle(enemyId)
            } else {console.log("Battle cell has no enemyId assigned")
                
            }
            
        } else {
            scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType)
        }
    }

    return (
        <div className={style.parentDiv_Castle}>
            <div className={style.gridDiv}>
                {castleMapArray.map((row)=> 
                    <div className={style.row}>
                        {row.map((cell) =>
                            <div key={cell.gridCord} onClick={() => cellEvent(
                                cell.eventType, 
                                cell.sceneId,
                                cell.bgImg,
                                cell.npcId,
                                cell.enemyId,
                                cell.villageId,
                                cell.mapType
                            )
                                } 
                                className={style.cell}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export const ForestMap:React.FC = () => {
    const scene = useContext(SceneContext);

    const cellEvent = (eventType:string|null, sceneId: string, bgImg: string,
	    npcId:string|null, enemyId: string|null, villageId: string|null, mapType:string) => {
       
        if (eventType === "battle"){
            if (enemyId) {
                scene.renderBattle(enemyId)
            } else {console.log("Battle cell has no enemyId assigned")}
        } else {
            scene.renderScene(eventType, sceneId, bgImg, npcId, villageId, mapType)
        }
    }

    return (
        <div className={style.parentDiv_Forest}>
            <div className={style.gridDiv}>
                {forestMapArray.map((row)=> 
                    <div className={style.row}>
                        {row.map((cell) =>
                            <div key={cell.gridCord} onClick={() => cellEvent(
                                cell.eventType, 
                                cell.sceneId,
                                cell.bgImg,
                                cell.npcId,
                                cell.enemyId,
                                cell.villageId,
                                cell.mapType
                            )
                                } 
                                className={style.cell}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

