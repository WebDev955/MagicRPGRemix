//HOOKS
//import { useContext, useState } from "react"
//COMPONENT IMPORTS
//import Inventory from "../UI/Inventory"
//import Button from "./Button"
//import Modal from "./Modal"
//COMPONENT IMPORTS - CONTEXTS
//import { PlayerContext } from "../Contexts/PlayerContext"

//STYLES
import styles from "./PlayerStats.module.css"

const PlayerStats:React.FC = () => {
    //const [openBag, setOpenBag] = useState(false)

    //const playerContext = useContext(PlayerContext)

    return(
        <div className={styles.parentDiv}>
            <div className={styles.statsDiv}>
                <h2>Player Name</h2>
                <h3 className={styles.health}>Hp: 5</h3>
                <h3 className={styles.health}>Df: 5</h3>
                <h3 className={styles.magic}>Magic: 10</h3>
                <h3 className={styles.gold}>Gold: 10</h3>
            </div>
        </div>
    )
}

export default PlayerStats