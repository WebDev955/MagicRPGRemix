//Import - HOOKS
import { useContext } from "react"
import styles from "./TopScreen.module.css"
//Import - CONTEXT
import {SceneContext} from "../components/contexts/SceneContext.tsx"
//IMORT - COMPNENTS 
import TopMenu from "./UI/TopMenu.tsx"


const TopScreen = () => {
  //ESTABLISH CONTEXT
  const sceneCtx = useContext(SceneContext)
  //DERIVE DATA FROM CONTEXT
  const scene = sceneCtx.scene
  const battle = sceneCtx.battle
  const currentMap = sceneCtx.currentMap

  return (
    <div className={styles.topParentWrapper}>
{/*BACKDROP DISPLAY*/}
      <div className={styles.backdropWrapper}>
        {currentMap === "castle" && <div className={styles.tutorial}/>}
        {currentMap === "forest" && <div className={styles.tutorial}/>}
      </div>
{/* TOP MENU */}
    {!scene?.eventType && !battle?.battleActive &&
      <div className={styles.topMenuWrapper}>
        <TopMenu/>
      </div>
    }
  </div>
 )
}
export default TopScreen