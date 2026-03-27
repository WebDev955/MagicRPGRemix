//IMPORTS - Hooks
import { useRef, useEffect, useState } from "react"
//IMPORTS - Images
import Slime from "../../assets/Slime.png"
import StoneTablet from "../../assets/StoneTablet.png"
import BattleTheme from "../../assets/Normal  Battle.mp3"
import BattleTheme2 from "../../assets/Battle.mp3"
//IMPORTS - STyles
import styles from "./Battle.module.css"


//IMPORTS - Components


const Battle:React.FC = () => {

    const [showSpells, setShowSpells] = useState(false)

    function displaySpells(){
        setShowSpells(!showSpells)   
    }

    const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current?.play()
  }, [])

    return(
        <div className= {styles.parentDiv}>
            <audio ref={audioRef} src={BattleTheme2} loop />
            <div className= {styles.enemyDiv}>
                <div className= {styles.enemyStats}>
                    <p>{"Slime"}</p>
                    <p>Element: {"None"}</p>
                    <p>HP: {"10"}</p> 
                    <p>Lv: {"3"}</p>
                </div>
                <div className={styles.enemyImgs}>
                    <img src={Slime} width = "75px"/>
                    <img src={Slime} width = "75px"/>
                </div>
            </div>
            <div className= {styles.playerDiv}> 
                <div className= {styles.playerBtlMenu}>
                    <div className= {styles.playerOptions}>
                        <button onClick={displaySpells}>Cast</button>
                        <button>Def</button>
                        <button>Bag</button>
                        <button>Run</button>
                    </div>
                    <div className= {styles.playerStats}>
                        <p>HP: {"10"}</p>
                        <p>MP: {"15"}</p>
                        <p>Channeling: {"Fire"}</p> 
                    </div>
                </div> 

                {showSpells && (
                    <div className={styles.spellImgs}>
                        <img src={StoneTablet} width = "100px"/>
                        <img src={StoneTablet} width = "100px"/>
                        <img src={StoneTablet} width = "100px"/>
                        <img src={StoneTablet} width = "100px"/>
                    </div>
                )}
            </div>
           

        </div>
    )
    
}

export default Battle