import { useContext } from "react";
import ConversationMenu from "./ConversationMenu";
import { ConversationContext } from "../contexts/ConversationContext";
import styles from "../UI/Dialogue.module.css"

type DialogueProps = {
    defaultText: string;
    loreText: string;
    questOfferText: string;
    questAcceptedText: string,
    questCompleteText: string;
    npcPortrait: string;
}

const Dialogue: React.FC<DialogueProps> = ({
    defaultText,
    loreText,
    questOfferText,
    questAcceptedText,
    questCompleteText,
    npcPortrait
}) => {

    const convoCtx = useContext(ConversationContext)

    return (
        <div className={styles.dialogueParentDiv}>
            <ConversationMenu />
            <div className={styles.dialogueRow}>
                <div className={styles.scrollContainer}>
                    <img className={styles.portrait} src={npcPortrait} />
                    <div className={styles.textBox}>

                        {convoCtx.renderDialogue === "default" &&
                            <p className={styles.dialougeText}>{defaultText}</p>
                        }
                        {convoCtx.renderDialogue === "lore" &&
                            <p className={styles.dialougeText}>{loreText}</p>
                        }
                        {convoCtx.renderDialogue === "quest" &&
                            <p className={styles.dialougeText}>{questOfferText}</p>
                        }
                        {convoCtx.renderDialogue === "questAccepted" &&
                            <p className={styles.dialougeText}>{questAcceptedText}</p>
                        }
                        {convoCtx.renderDialogue === "questCompleted" &&
                            <p className={styles.dialougeText}>{questCompleteText}</p>
                        }

                    </div>
                </div>
            </div>
            <div>
                <button>previous</button>
                <button>next</button>
            </div>
        </div>
    )
}

export default Dialogue