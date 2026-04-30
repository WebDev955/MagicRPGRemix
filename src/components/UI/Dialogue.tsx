import { useContext } from "react";
import ConversationMenu from "./ConversationMenu";
import { ConversationContext } from "../contexts/ConversationContext";
//import { GlobalProgress } from "../contexts/GlobalPrgressContext";
import styles from "../UI/Dialogue.module.css"

type DialogueProps = {
    npcQuest: string | undefined
    defaultText: string;
    loreText: string;
    questOfferText: string;
    questAcceptedText: string,
    questCompleteText: string;
    npcPortrait: string | undefined;
}

const Dialogue: React.FC<DialogueProps> = ({
    npcQuest,
    defaultText,
    loreText,
    questOfferText,
    questAcceptedText,
    questCompleteText,
    npcPortrait
}) => {

    const convoCtx = useContext(ConversationContext)
    //const globalCtx = useContext(GlobalProgress);
    //const gameFlag = globalCtx.gameFlags

    return (
        <div className={styles.dialogueParentDiv}>
            <ConversationMenu
                npcQuest = {npcQuest}
            />
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