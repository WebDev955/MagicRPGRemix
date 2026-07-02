//IMPORTS - HOOKS
import { useContext } from "react"
//IMPORTS - COMPONENTS
import TopScreen from "./TopScreen"
import BottomScreen from "./BottomScreen"
import Battle from "./Battles/Battle"
import Scene from "./UI/Scene"
import Modal from "./UI/Modal"
//IMPORTS - STYLE
import styles from "./Game.module.css"
import modalStyle from "./UI/Modal.module.css"
//IMPORTS - CONTEXT
import { SceneContext } from "./contexts/SceneContext"
//IMPORTS - DATA
import { NpcList } from "../data/NpcData"
import { ScenesList } from "../data/SceneData"
 

const Game = () => {
//Define contexts
  const sceneCtx = useContext(SceneContext)
  const scene = sceneCtx.scene
  const battle = sceneCtx.battle
//Derived data
  const npcFound = NpcList.find((npc) => npc.id === scene.npcId)
  const sceneFound = ScenesList.find((s) => s.sceneId === scene.sceneId)
  const theme = sceneFound?.theme || "default"

 return (
  <div className = {styles.gameParentDiv}>
    <section className={styles.topScreen}><TopScreen/></section>
    <section className={styles.bottomScreen}><BottomScreen/></section>

    <Modal open = {battle?.battleActive === true} className={modalStyle.battleModal}>
      {battle?.battleActive === true && 
        <Battle/>
        }
   </Modal>

{/*EVENTs DISPLAY*/}
    <Modal open = {scene?.eventType === "npc" || scene?.eventType === "village"}
    className={modalStyle.npcModal}>
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
  </div>
)
}
export default Game
