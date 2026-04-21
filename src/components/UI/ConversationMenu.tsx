//HOOKS
import { type ReactNode, useState} from "react"

//COMPONENT IMPORTS
//COMPONENT IMPORTS - CONTEXTS
//STYLES
import styles from "../UI/ConversationMenu.module.css"

//type ConversationProps = {}

// 1. A Box with dialogue options
// 2. Selecting an option will display relvant NPC text
// 3. picking "Any Quests"
    // a. NPC quest relevant dialouge is displayed
    // b. a button to "Accpt Quest" is displayed
        // c. a quest linked to that NPC is given to player
        // d. addQuest runs, adding to player and updating a GameProgress context

const ConversationMenu = () => {
    return (
        <div className = {styles.parentDiv}>
            <div className = {styles.conversationMenu}>
                <p>"Tell me about this place"</p>
                <p>"Do you have any quests for me?</p>
            </div>
    </div>
    )
}

export default ConversationMenu