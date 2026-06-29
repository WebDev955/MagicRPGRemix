//IMPORTS - Hooks
import {useContext} from "react"
//IMPORT - Context
import { BattleContext } from "../contexts/BattleContext"
//IMPORTS - STYLES
import styles from "./BattleTextBox.module.css"

const BattleTextBox:React.FC = () => { 
//Context Data   
    const battleCtx = useContext(BattleContext)
//Derived context data
    const lastAction = battleCtx.battleState.lastAction 

    return(
        <main className={styles.battleTextBoxWrapper}> 
            {lastAction && ( 
              <div className={styles.lastActionsWrapper}>
                  <p>{lastAction.caster} cast {lastAction.spellName} on {lastAction.targetName}.</p> 
                  <p>{lastAction.targetName} took <span>{lastAction.damageDealt}</span> points of damage!</p>
              </div>
            )} 
        </main>
    )
}
export default BattleTextBox