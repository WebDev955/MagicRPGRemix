import { useContext } from "react"
//import { PlayerContext } from "../contexts/PlayerContext";
//import { GlobalContext } from "../contexts/GlobalPrgressContext";
import { ConversationContext } from "../contexts/ConversationContext"
import styles from "../UI/ConversationMenu.module.css"

const ConversationMenu = () => {
    //const globalCtx = useContext(GlobalContext);
    //const playerCtx = useContext(PlayerContext);
    const convoCtx = useContext(ConversationContext);

    const ifQuestDialogue = convoCtx.renderDialogue === "quest"
    const questAccepted = convoCtx.renderDialogue === "questAccepted"

    const acceptQuestHandler = () => {
        // playerCtx.addQuest(questId)
        // globalCtx.acceptedQuests(questId)
        convoCtx.displayDialogue("questAccepted")
        alert("Quest Added!")
        //globalCtx.setFlag(true)
    }

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

                {ifQuestDialogue && 
                    <p onClick={acceptQuestHandler}>Accept Quest</p>
                }

            </div>
        </div>
    )
}

export default ConversationMenu