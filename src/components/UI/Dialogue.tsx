//HOOKS
import React, { type ReactNode } from "react"  // ✅ import ReactNode
//COMPONENT IMPORTS
//COMPONENT IMPORTS - CONTEXTS
//STYLES
import styles from "./Dialouge.module.css"


type DialogueProps = {
    children: ReactNode
}

const Dialogue:React.FC<DialogueProps> = ({children}) => {
    return (
        <>
            <div className = {styles.textBox} >
                <p className = {styles.dialouge}>{children}</p>
            </div>
            <div>
                <button>previous</button>
                <button>next</button>

            </div>
        
        </>
    )
}

export default Dialogue