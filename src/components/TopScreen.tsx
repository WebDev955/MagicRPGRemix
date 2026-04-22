//Import - HOOKS
import { useContext } from "react"

import styles from "../TopScreen.module.css"

//Import - CONTEXT
import {SceneContext} from "../components/contexts/SceneContext.tsx"
//IMPORT - DATA 
import {ScenesList} from "../data/SceneData.tsx"
import {NpcList} from "../data/NpcData.tsx"
//import {QuestList} from "../data/QuestData.tsx"

//IMORT - COMPNENTS 
import Battle from "./Battles/Battle.tsx"
import Dialogue from "./UI/Dialogue.tsx"


const TopScreen = () => {
  const sceneCtx = useContext(SceneContext)
  const scene = sceneCtx.scene
  const battle = sceneCtx.battle

  const npcFound = NpcList.find((npc) => npc.id === scene.npcId)
  const sceneFound = ScenesList.find((s) => s.sceneId === scene.sceneId)


  return (
    <div className={styles.parentDiv}>
      {scene?.eventType === "npc" &&
        <div className={styles[sceneFound?.theme] || styles.default}>
          <Dialogue
            npc = {npcFound || null}
            defaultText = {npcFound?.dialogue?.defaultText || "No Text Found"}
            loreText =  {npcFound?.dialogue?.loreText|| "No Text Found"}
            questOfferText =  {npcFound?.dialogue?.questOfferText|| "No Text Found"}
            questAcceptedText =  {npcFound?.dialogue?.questAcceptedText|| "No Text Found"}
            questComplete =  {npcFound?.dialogue?.questCompleteText|| "No Text Found"}
            npcPortrait = {npcFound?.portrait}
          />
        </div>
      }
      
      {scene?.eventType === "village" && 
        "Village Scene Content"
      }
      
      {battle?.battleActive === true && 
        <Battle/>
      }
    </div>
 )
}
export default TopScreen