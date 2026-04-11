//MonsterLogUI
import {useContext, useState} from "react"
import {PlayerContext} from "../contexts/PlayerContext"

import styles from "../UI/MonsterLog.module.css"

import Modal from "./Modal"

const MonsterLog = () => {
    const [monsterDetails, setMonsterDetails] = useState("")
  
    const playerCtx = useContext(PlayerContext)
    const monsterLog = playerCtx.monsterLog
    const selectedMonster = monsterLog.find(monster => monster.id === monsterDetails)

    const closeMonsterLogHandler = () => {
        playerCtx.openMonsterLog()
    }
    const displayInfoHandler = (monsterId:string) => {
    setMonsterDetails(monsterId)
    }
  
 return (
<Modal open = {playerCtx.isMonsterLogOpen} className={styles.inventoryModal}>
    <div className = {styles.parentDiv}>
        <p onClick={closeMonsterLogHandler}>Close</p>
{/* Sort Menu*/}
        <h1>Sort by:</h1>
        <div className={styles.sortDiv}>
            <p>Name</p>
            <p>Number</p>
            <p>Fought</p> 
        </div>
{/* Monster Title Bar*/}
   {monsterLog.map((monster) => 
        <div key={monster.id} onClick={() => displayInfoHandler(monster.id)} className = {styles.monsterBar}>
            <p># {monster.monsterNum}</p>
            <p>{monster.name}</p>
        </div>
)}
{/* Monster Details - Primary Info*/}
    {selectedMonster && 
        <div id={selectedMonster.id} className={styles.contentDiv}>
            <div className={styles.heading}>
                <h1>{selectedMonster.name}</h1>
                <img src={selectedMonster.img}/>
                <p>{selectedMonster.description}</p>
            </div>
        </div>
    }
    <hr/>
{/* Monster Details - Primary Stats*/}
     {selectedMonster &&
        <div className={styles.info}>
            <p>Element:{selectedMonster.element}</p>
            <h1>Spawn Locations</h1> 
            {selectedMonster.spawnLoc.map((loc) => 
                <p>{loc}</p>
            )} 
            {selectedMonster.lootDrops.map((loot) =>
                <div key = {loot.id}>
                    <p>Loot Drops:{loot.name}</p>
                    <p>Loot Drops:{loot.desc}</p>
                </div>
            )}               
        </div>
    }
  </div>
</Modal>
    )
}

export default MonsterLog