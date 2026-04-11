//MonsterLogUI
import {useContext, useState} from "react"
import {PlayerContext} from "../contexts/PlayerContext"

import styles from "../UI/MonsterLog.module.css"
import modalStyle from "../UI/Modal.module.css"

import Modal from "./Modal"

const MonsterLog = () => {
    const [monsterDetails, setMonsterDetails] = useState("")
  
    const playerCtx = useContext(PlayerContext)
    const monsterLog = playerCtx.monsterLog
    const selectedMonster = monsterLog.find(monster => monster.id === monsterDetails)

    console.log(selectedMonster)

    const closeMonsterLogHandler = () => {
        playerCtx.openMonsterLog()
    }
    const displayInfoHandler = (monsterId:string) => {
    setMonsterDetails(monsterId)
    }
  
 return (
<Modal open = {playerCtx.isMonsterLogOpen} className={modalStyle.monsterLogModal}>
    <div className = {styles.parentDiv}>
    <p onClick={closeMonsterLogHandler}>Close</p>
{/* Sort Menu*/} 
        <div className={styles.sortDiv}>
            <p>Sort by:</p>
            <p>Name |</p>
            <p>Number |</p> 
            <p>Fought</p> 
        </div>
{/* Monster Title Bar*/}
   {monsterLog.map((monster) => 
        <div key={monster.id} onClick={() => displayInfoHandler(monster.id)} className = {styles.monsterBarDiv}>
            <p># {monster.monsterNum} - {monster.name}</p>
        </div>
    )}
{/* Monster Details - Primary Info*/}
    {selectedMonster && 
        <div id={selectedMonster.id} className={styles.primaryInfoDiv}>
            <div className={styles.heading}>
                <img src={selectedMonster.img}/>
                <p>"{selectedMonster.description}"</p>
            </div>
        </div>
    }
    <hr/>
{/* Monster Details - Primary Stats*/}
    {selectedMonster &&
        <div className={styles.primaryStatsDiv}>
            <h2>Element: {selectedMonster.element}</h2>
            <h2>Spawn Locations:</h2> 
            {selectedMonster.spawnLoc.map((loc) => 
                <p>{loc}</p>
            )} 
            <div>
                <h2>Loot Drops:</h2> 
                {selectedMonster.lootDrops.map((loot) =>
                    <div key = {loot.id} className={styles.lootDropsDiv}>
                        <h3>{loot.name}</h3>
                        <p>{loot.desc}</p>
                    </div>
                )}  
            </div>             
        </div>
    }
  </div>
</Modal>
    )
}
export default MonsterLog