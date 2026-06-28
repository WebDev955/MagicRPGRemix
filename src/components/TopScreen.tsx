//Import - HOOKS
import { useContext } from "react"
import styles from "./TopScreen.module.css"
//Import - CONTEXT
import {SceneContext} from "../components/contexts/SceneContext.tsx"
//IMPORT - DATA 
import {ScenesList} from "../data/SceneData.tsx"
import {NpcList} from "../data/NpcData.tsx"
//IMORT - COMPNENTS 
import Battle from "./Battles/Battle.tsx"
import Dialogue from "./UI/Dialogue.tsx"
import TopMenu from "./UI/TopMenu.tsx"

const TopScreen = () => {
  const sceneCtx = useContext(SceneContext)
  const scene = sceneCtx.scene
  const battle = sceneCtx.battle
  const currentMap = sceneCtx.currentMap
  const npcFound = NpcList.find((npc) => npc.id === scene.npcId)
  const sceneFound = ScenesList.find((s) => s.sceneId === scene.sceneId)
  const theme = sceneFound?.theme || "default"

  const exitSceneHandler = () => {
    sceneCtx.exitScene()
  }

  return (
    <div className={styles.topParentWrapper}>
{/*BACKDROP DISPLAY*/}
      <div className={styles.backdropWrapper}>
        {currentMap === "castle" && <div className={styles.tutorial}/>}
        {currentMap === "forest" && <div className={styles.tutorial}/>}
      </div>
{/*EVENTs DISPLAY*/}
    {(scene?.eventType || battle?.battleActive) &&
      <div className={styles.eventsWrapper}>
        {scene?.eventType === "npc" &&
          <div className={styles[theme] || styles.default}>
            <p className={styles.exit}onClick = {exitSceneHandler}>Leave</p>
            <Dialogue
              npcQuest = {npcFound?.questId}
              defaultText = {npcFound?.dialogue?.defaultText || "No Text Found"}
              loreText =  {npcFound?.dialogue?.loreText|| "No Text Found"}
              questOfferText =  {npcFound?.dialogue?.questOfferText|| "No Text Found"}
              questAcceptedText =  {npcFound?.dialogue?.questAcceptedText|| "No Text Found"}
              questCompleteText =  {npcFound?.dialogue?.questCompleteText|| "No Text Found"}
              npcPortrait = {npcFound?.portrait}
            />
          </div>
        }
        {scene?.eventType === "village" && "Village Scene Content"}
        {/*{battle?.battleActive === true && <Battle/>} */}
        
      </div>
    }
{/* TOP MENU — floats over backdrop, hidden during events */}
    {!scene?.eventType && !battle?.battleActive &&
      <div className={styles.topMenuWrapper}>
        <TopMenu/>
      </div>
    }
  </div>
 )
}
export default TopScreen