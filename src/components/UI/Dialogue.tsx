//HOOKS
//COMPONENT IMPORTS
import ConversationMenu from "./ConversationMenu";
//COMPONENT IMPORTS - CONTEXTS
//STYLES
import styles from "../UI/Dialogue.module.css"


type DialogueProps = {
    defaultText: string;
    questOfferText: string;
    questComplete: string;
    npcPortrait: string;
}


const Dialogue:React.FC<DialogueProps> = ({
    defaultText,
    questOfferText,
    questComplete,
    npcPortrait

}) => {
    return (
        <div className={styles.dialogueParentDiv}> 
        <ConversationMenu/> 
            <div className={styles.dialogueRow}> 
                <div className={styles.scrollContainer}>
                    <img className = {styles.portrait} src={npcPortrait}/>
                    <div className = {styles.textBox}>
                        <p className = {styles.dialougeText}>{questOfferText}</p>
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