//IMPORTS - CONTEXT
import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"
//IMPORT - DATA
import {CastleMap, ForestMap} from "../../data/MapForest"
//IMPORT - STYLE
import style from "./BottomScreen.module.css"

const BottomScreen = () => {
  //ESTABLISH CONTEXT
  const sceneCtx = useContext(SceneContext)
  const activeMap = sceneCtx.currentMap

  return (
    <main className={style.bottomParentWrapper}>
      {activeMap === "castle" &&
        <>
          <CastleMap/>
        </>
      } 
      {activeMap === "forest" &&
        <>
          <ForestMap/>
        </>
      }
    </main>
 )
}

export default BottomScreen