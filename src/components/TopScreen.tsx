//Import - HOOKS
import { useContext } from "react"
//IMPORT - CONTEXT
import {SceneContext} from "../components/contexts/SceneContext.tsx"
//IMpORT - COMPNENTS 
import TopMenu from "./UI/TopMenu.tsx"
import Scene from "./UI/Scene.tsx"
  import Modal from "./UI/Modal.tsx"
  import modalStyle from "../components/UI/Modal.module.css"
//IMPORT - TYPES/DATA
import { NpcList } from "../data/NpcData"
import { ScenesList } from "../data/SceneData"
//IMPORT - STYLE
import styles from "./TopScreen.module.css"

const TopScreen = () => {
  //ESTABLISH CONTEXT
  const sceneCtx = useContext(SceneContext)
  //DERIVE DATA FROM CONTEXT
  const scene = sceneCtx.scene
  const battle = sceneCtx.battle
  //DATA FOR SCENES
  const currentMap = sceneCtx.currentMap
  const npcFound = NpcList.find((npc) => npc.id === scene.npcId)
  const sceneFound = ScenesList.find((s) => s.sceneId === scene.sceneId)
  const theme = sceneFound?.theme || "default"

  return (
    <div className={styles.topParentWrapper}>
      <Modal 
      open = {scene?.eventType === "npc" || scene?.eventType === "village"} 
      className={modalStyle.npcModal}
    >
      {(scene?.eventType || battle?.battleActive) &&
        <div className={styles.eventsWrapper}>
          {scene?.eventType === "npc" &&
            <div className={styles[theme] || styles.default}>
              <Scene
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
        </div>
      }
      </Modal>
{/*BACKDROP DISPLAY*/}
      <div className={styles.backdropWrapper}>
        {currentMap === "castle" && <div className={styles.tutorial}/>}
        {currentMap === "forest" && <div className={styles.forest}/>}
      </div>
{/* TOP MENU */}
      <div className={styles.topMenuWrapper}>
        <TopMenu/>
      </div>
  </div>
 )
}
export default TopScreen