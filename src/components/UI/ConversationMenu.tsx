import { useContext, useEffect } from "react"
//import { PlayerContext } from "../contexts/PlayerContext";
import { GlobalProgress } from "../contexts/GlobalPrgressContext";
import { ConversationContext } from "../contexts/ConversationContext"
import styles from "../UI/ConversationMenu.module.css"


type ConversationProps = {
    npcQuest: string | undefined
}

const ConversationMenu: React.FC<ConversationProps> = ({
        npcQuest
}) => {


    const globalCtx = useContext(GlobalProgress);
    //const playerCtx = useContext(PlayerContext);
    const convoCtx = useContext(ConversationContext);
    const ifQuestDialogue = convoCtx.renderDialogue === "quest"

    const acceptQuestHandler = (npcQuest:string) => {
        globalCtx.addActiveQuest(npcQuest)
        // playerCtx.addQuest(questId)
        convoCtx.displayDialogue("questAccepted")
        alert("Quest Added!")
        //globalCtx.setFlag(true)
    }
useEffect(() => {
    console.log("Active quests updated:", globalCtx.questsActive)
}, [globalCtx.questsActive])

    return (
        <div className={styles.parentDiv}>
            <div className={styles.conversationMenu}>

                <p onClick={() => convoCtx.displayDialogue("default")}>
                    "Hello!"
                </p>
                <p onClick={() => convoCtx.displayDialogue("lore")}>
                    "Tell me about this place"
                </p>
                <p onClick={() => convoCtx.displayDialogue("quest")}>
                    "Do you have any quests for me?"
                </p>

                {ifQuestDialogue && npcQuest &&
                    <p onClick={() => acceptQuestHandler(npcQuest)}>Accept Quest</p>
                }

            </div>
        </div>
    )
}

export default ConversationMenu