import { useContext, useEffect } from "react"
//import { PlayerContext } from "../contexts/PlayerContext";
import { GlobalProgress } from "../contexts/GlobalPrgressContext";
import { ConversationContext } from "../contexts/ConversationContext"
import { PlayerContext } from "../contexts/PlayerContext";
import styles from "../UI/ConversationMenu.module.css"


type ConversationProps = {
    npcQuest: string | undefined
}

const ConversationMenu: React.FC<ConversationProps> = ({
        npcQuest
}) => {

    const globalCtx = useContext(GlobalProgress);
    const playerCtx = useContext(PlayerContext);
    const convoCtx = useContext(ConversationContext);
    const ifQuestDialogue = convoCtx.renderDialogue === "quest"
    const questInProgress = globalCtx.gameFlags.tutorialFlags.tutorialQuestAcquired

    const acceptQuestHandler = (npcQuest:string) => {
        globalCtx.addActiveQuest(npcQuest)
        playerCtx.addNewQuest(npcQuest)
        convoCtx.displayDialogue("questAccepted")
        globalCtx.setFlag("tutorialFlags", "tutorialQuestAcquired")
         
    }
useEffect(() => {
    console.log("Active quests updated:", globalCtx.questsActive)
    console.log("Quest Log Updated:", playerCtx.questLog)
    console.log("Flags set:", )
    
}, [playerCtx.questLog, globalCtx.questsActive, globalCtx.gameFlags])

    return (
        <div className={styles.parentDiv}>
            <div className={styles.conversationMenu}>
                <p className={styles.conversationOption} onClick={() => convoCtx.displayDialogue("default")}>
                    "Hello!"
                </p>
                <p className={styles.conversationOption} onClick={() => convoCtx.displayDialogue("lore")}>
                    "Tell me about this place"
                </p>
                <p className={styles.conversationOption} onClick={() => convoCtx.displayDialogue("quest") }>
                    "Do you have any quests for me?"
                </p>

                {questInProgress === true  &&
                    <p>"What do I need to do again?"</p>
                }

                {ifQuestDialogue && npcQuest &&
                    <p className={styles.acceptQuest}onClick={() => acceptQuestHandler(npcQuest)}>Accept Quest</p>
                }

            </div>
        </div>
    )
}

export default ConversationMenu