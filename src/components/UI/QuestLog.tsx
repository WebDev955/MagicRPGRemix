//IMPORTS - HOOKS
import {useState, useContext} from "react"
//IMPORTS - COMPONENTS
import Modal from "./Modal"
//IMPORTS - CONTEXTS
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - STYLES 
import styles from "../UI/QuestLog.module.css"
import modalStyle from "../UI/Modal.module.css"

const QuestLog = () => {
    //ESTABLISH STATE
    const [viewQuest, setViewQuest] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
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
    <Modal open = {playerCtx.isQuestLogOpen} className={modalStyle.questModal}>
        <div className={styles.questWrapperDiv}>
            <div className={styles.questLogHeader}>
                <button onClick={closeQuestLogHandler}>Close</button>
                <h1>Quest Log</h1>
                <div className={styles.questSortMenu}>
                    <p>Active</p>
                    <p>Tracking</p>
                    <p>Complete</p>
                </div>
                <div className={styles.headerBelt}>
        <div className={styles.beltDiamond} />
    </div>
            </div>
{/* Quest Title Bar*/}
            {questLog.map((quest) => 
            <div className={styles.questNameCard} onClick={() => questDetailsHandler(quest.id)}>
                 <div className={styles.sectionDivider}>
                    <h2>{quest.name}</h2>
                </div>
                <p>Track</p>
            </div>
            )} 
{/* Quest Details */}
            <div className={styles.questDetailsWrapper}>              
            {selectedQuest && 
                <div key={selectedQuest.id} className={styles.questDescription}>
                    <p>{selectedQuest.description}</p>
                    <p><span>Requested by:</span> {selectedQuest.npcGiver}</p>
                </div>
            }
{/* Quest Objectives */}
            {selectedQuest && selectedQuest.objectives.map((obj) =>
                <div className={styles.questObjectivesWrapper}>
                    <div className={styles.sectionDivider}><h2>Objectives</h2></div>
                    <ul className={styles.objectiveList}>
                        <li key={obj.id}>
                            {obj.name}: {obj.description}
                        </li>
                    </ul>
                </div>
            )}
            {selectedQuest && selectedQuest.rewards.map((reward) =>
                <div className={styles.questRewardsWrapper}>
                    <h2>Rewards</h2>
                    <ul>
                        <li>{reward.name}</li>
                    </ul>
                </div>
            )}
            </div> 
        </div>
    </Modal> 
)
}

export default QuestLog
