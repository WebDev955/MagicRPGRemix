
//IMPORT - Hooks
import {useContext} from "react"
//IMPORT - Context
import {SceneContext} from "../components/contexts/SceneContext"
//IMPORT Data
import forestMapArray from "./MapData";
//import Forest from "../assets/Forest.jpg"
import style from "./MapForest.module.css"
//IMPORT - Images
//import Forest from "../assets/Forest.jpg"


const ForestMap:React.FC = () => {
    const scene = useContext(SceneContext);

    const cellEvent = (eventType:string|null, sceneId: string, bgImg: string,
	    npcId:string|null, enemyId: string|null, villageId: string|null) => {
       
        if (eventType === "battle"){
            if (enemyId) {
                scene.renderBattle(enemyId)
            } else {console.log("Battle cell has no enemyId assigned")
                
            }
            
        } else {
            scene.renderScene(eventType, sceneId, bgImg, npcId, villageId)
        }
        alert(`Cell event ${eventType} with ${sceneId || enemyId} activated. Check new scene on TopScreen`)
    }

    return (
        <div className={style.parentDiv}>
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
                                cell.villageId
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

export default ForestMap