//CONTEXT
import { useContext } from "react"
import { SceneContext } from "./contexts/SceneContext"
//import {SceneContext} from "...";
import {CastleMap, ForestMap} from "../data/MapForest"


const BottomScreen = () => {
 const sceneCtx = useContext(SceneContext)
 const activeMap = sceneCtx.currentMap


  return (
    <div>
      
      {activeMap === "castle" &&
        <>
          <h3>The Castle</h3>
          <CastleMap/>
        </>
      } 

      {activeMap === "forest" &&
        <>
          <h3>The Forest</h3>
          <ForestMap/>
        </>
      }
    </div>
 )

}

export default BottomScreen