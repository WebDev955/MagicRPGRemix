//IMPORTS - Hooks
import { useState, useContext } from 'react'
//IMPORTS - Images
import WizardEditNoBG from "../../../assets/WizardEditNoBG.png"
import CastleWall from "../../../assets/CastleWall.jpg"
//import Forest from "../../../assets/Forest.jpg"
//import ForestMap from "../../../assets/MagicRPGMapDraft.png"
//import backgroundMusic from '../../../assets/MagicBGM.mp3'
//IMPORTS - Syles
import styles from "./NewGame.module.css"
//IMPORTS - Components
import PlayerStats from '../../UI/PlayerStats.tsx'
import Dialogue from "../../UI/Dialogue.tsx"
import BattleTest from "../../Battles/BattleTest.tsx"
//IMPORTS - Context
import {BattleContext}  from '../../contexts/BattleContext.tsx'
import {PlayerContext} from '../../contexts/PlayerContext.tsx'

import{slime} from "../../../data/Enemies.tsx"

import MapForest from "../../../data/MapForest.tsx"




//import Battle from '../../Battles/Battle.tsx'

const NewGame = () => {
    const battleCtx = useContext(BattleContext)!
    const playerCtx = useContext (PlayerContext)!
    const battleEnemy = slime


    console.log(battleEnemy)

    const [openForest, setOpenForest] = useState(false)
        function goToForest(){
            setOpenForest(true)
        }

        function leaveForest(){
            setOpenForest(false)
        }

    const startBattleHandler = () => {
        battleCtx.startBattle(playerCtx, battleEnemy)
    }

    /*{
        const [openBattle, setOpenBattle] = useState(false)
        function goToBattle(){
            setOpenBattle(true)
        }

        function leaveBattle(){
            setOpenBattle(false)
        }

            button onClick={goToBattle}>BATTLE!</button>
            <button onClick={leaveBattle}>Leave Battle</button>

    }*/

    return(
        <>
        <PlayerStats/>
            <div className ={styles.parentDiv}  style={{ backgroundImage: `url(${CastleWall})` }}>
                    <img className ={styles.imgWizard}src={WizardEditNoBG} />
                    <Dialogue>"Hello,Lorem ipsum dolor sit    amet, consectetur adipiscing elit. Maecenas aliquet tempus ullamcorper. Fusce fringilla urna ut lacus laoreet, sit amet molestie velit lobortis. Quisque ut dignissim justo, sed dapibus leo. Integer malesuada velit viverra massa cursus, ac cursus metus pulvinar. Quisque nec mi eu sapien porta bibendum eget sit amet ipsum. Etiam eget odio ante. Fusce libero neque, fermentum at mi eget, tristique faucibus urna. Cras non fringilla urna. Nam a fermentum arcu. Quisque ut dignissim justo, sed dapibus leo. Integer malesuada velit viverra massa cursus, ac cursus metus pulvinar.
                    </Dialogue>
                    <button onClick={goToForest}>Go To Forest</button>
                    <button onClick={leaveForest}>Close Forest</button>
                    <button onClick= {() => startBattleHandler ()}>Start Battle!</button>
            </div>
                {openForest 
                    ? <MapForest/>
                    : null
                }
                {battleCtx.battle
                    ? <BattleTest/>
                    : null
                }
        </>
    )
    
}

export default NewGame