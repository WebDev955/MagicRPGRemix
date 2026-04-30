//IMPORTS 
import {useState, useContext} from "react"
import {PlayerContext} from "../contexts/PlayerContext"
import styles from "../UI/QuestLog.module.css"

import Modal from "./Modal"

const QuestLog = () => {

    const [viewQuest, setViewQuest] = useState("")
    
    const playerCtx = useContext(PlayerContext)
    const questLog = playerCtx.questLog
    const selectedQuest = questLog.find (quest => quest.id === viewQuest )

    const closeQuestLogHandler = () => { 
        playerCtx.openQuestLog()
    } 

 const questDetailsHandler = (questId:string) => {
    if (viewQuest === questId) { 
        setViewQuest(""); return
    }
        setViewQuest(questId)
    }

return (
<Modal open = {playerCtx.isQuestLogOpen}>
    <div className={styles.questWrapperDiv}>
        <p onClick={closeQuestLogHandler}>Close</p>
        <div className={styles.questLogHeader}>
            <h1>Quest Log</h1>
            <div className={styles.questSortMenu}>
                <p>Active</p>
                <p>Complete</p>
            </div>
        </div>
        {/* Quest Title Bar*/}
        {questLog.map((quest) => 
            <div className={styles.questNameCard}>
                <div key = {quest.id} onClick={() => questDetailsHandler(quest.id)}>
                    <h2>{quest.name}</h2>
                    <p>Track</p>
                </div>
            </div>
        )}              
        {/* Quest Details */}
        {selectedQuest && 
            <div className={styles.questDetailsWrapper}>
                <div>
                    <p>{selectedQuest.description}</p>
                    <p>Requested by: {selectedQuest.npcGiver}</p>
                </div>
            </div>
        }
        {/* Quest Objectives */}
        {selectedQuest && selectedQuest.objectives.map((obj) =>
            <div className={styles.questDetailsWrapper}>
                <div>
                    <h2>Objectives</h2>
                </div>
                <ul className={styles.objectiveList}>
                    <li key={obj.id}>
                        {obj.name}: {obj.description}
                    </li>
                </ul>
            </div>
        )}
        {selectedQuest && selectedQuest.rewards.map((reward) =>
            <div className={styles.questRewardsWrapper}>
                <h3>Rewards</h3>
                <p>{reward.name}</p>
            </div>
        )}
  </div>
 </Modal> 
 )
}

export default QuestLog
