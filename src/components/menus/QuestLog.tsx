//IMPORTS - HOOKS
import {useState, useContext} from "react"
//IMPORTS - COMPONENTS
import Modal from "../UI/Modal"
//IMPORTS - CONTEXTS
import {PlayerContext} from "../contexts/PlayerContext"
//IMPORTS - TYPES/DATA
import type { QuestLogType } from "../../data/PlayerData"
//IMPORTS - STYLES
import styles from "./QuestLog.module.css"
import modalStyle from "../UI/Modal.module.css"

//TEMP - MOCK QUESTS FOR PREVIEWING MULTIPLE QUEST LOG ENTRIES

const QuestLog = () => {
    //ESTABLISH STATE
    const [viewQuest, setViewQuest] = useState("")
    //ESTABLISH CONTEXT
    const playerCtx = useContext(PlayerContext)
    //DERIVE DATA FROM CONTEXT
    const questLog = playerCtx.questLog

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
            <div key={quest.id} className={styles.questCardWrapper}>
                <div className={styles.questNameCard} onClick={() => questDetailsHandler(quest.id)}>
                     <div className={styles.sectionDivider}>
                        <h2>{quest.name}</h2>
                    </div>
                    <p>Track</p>
                </div>
{/* Quest Details */}
                {viewQuest === quest.id &&
                <div className={styles.questDetailsWrapper}>
                    <div className={styles.questDescription}>
                        <p>{quest.description}</p>
                        <p><span>Requested by:</span> {quest.npcGiver}</p>
                    </div>
{/* Quest Objectives */}
                    {quest.objectives.map((obj) =>
                        <div key={obj.id} className={styles.questObjectivesWrapper}>
                            <div className={styles.sectionDivider}><h2>Objectives</h2></div>
                            <ul className={styles.objectiveList}>
                                <li>
                                    {obj.name}: {obj.description}
                                </li>
                            </ul>
                        </div>
                    )}
                    {quest.rewards.map((reward) =>
                        <div key={reward.id} className={styles.questRewardsWrapper}>
                            <h2>Rewards</h2>
                            <ul>
                                <li>{reward.name}</li>
                            </ul>
                        </div>
                    )}
                </div>
                }
            </div>
            )}
        </div>
    </Modal> 
)
}

export default QuestLog
