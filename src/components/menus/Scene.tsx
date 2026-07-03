//IMPORT - HOOKS
import { useContext } from "react";
//IMPORT - CONTEXT
import { ConversationContext } from "../contexts/ConversationContext";
//IMPORT - COMPONENTS
import ConversationMenu from "./ConversationMenu";
//import { GlobalProgress } from "../contexts/GlobalPrgressContext";
//IMPORT - STYLES/IMAGES
import styles from "./Scene.module.css"
import BackArrow from "../../assets/BackArrow.svg"
import ForwardArrow from "../../assets/ForwardArrow.svg"

type SceneProps = {
    npcQuest: string | undefined
    defaultText: string;
    loreText: string;
    questOfferText: string;
    questAcceptedText: string,
    questCompleteText: string;
    npcPortrait: string | undefined;
}

const Scene: React.FC<SceneProps> = ({
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
        <div className={styles.sceneWrapperDiv}>
            <ConversationMenu
                npcQuest = {npcQuest}
        />
            <div className={styles.dialogueWrapper}>
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
                <div className={styles.processDialogueWrapper}>   
                    <img src={BackArrow} width="40"/>
                    <img src={ForwardArrow} width="40"/>
                </div>
            </div>
        </div>
    )
}

export default Scene