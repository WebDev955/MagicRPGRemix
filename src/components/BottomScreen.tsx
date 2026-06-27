//CONTEXT
import { useContext } from "react"
import { SceneContext } from "./contexts/SceneContext"
//import {SceneContext} from "...";
import {CastleMap, ForestMap} from "../data/MapForest"

import style from "../components/BottomScreen.module.css"

const BottomScreen = () => {
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