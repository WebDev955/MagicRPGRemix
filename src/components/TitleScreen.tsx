//HOOKS - HOOKS
import {useContext, useEffect, useRef} from "react";
//IMPORTS - COMPONENTS 
import PlayerCreationForm from "./UI/Forms/PlayerCreationForm"
import Button from "./UI/Button";
import Modal from "./UI/Modal";
//IMPORT - CONTEXT
import { AccountContext } from "../components/contexts/AccountContext"
//IMPORT - STYLES/MUSIC
import TitleTheme from "../assets/TitleTheme.mp3"
import modalStyle from "./UI/Modal.module.css"

const TitleScreen = () => { 
    
    
    const accountCtx = useContext(AccountContext)
    const handleCreateAccount = () => {
         if (audioRef.current) {
            audioRef.current.volume = 0.1
            audioRef.current.play()
        }  
        accountCtx.startCreatingAccount()
    }

   const audioRef = useRef<HTMLAudioElement | null>(null)
    
    return (
        <div>
            <audio ref={audioRef} src={TitleTheme} loop/>
            <h1>Magic RPG</h1>
            <Button onClick={handleCreateAccount} >New Game</Button>
            <Button>Login</Button>
            <Modal open={accountCtx.isCreatingAccount} className={modalStyle.signUpModal}>
                <PlayerCreationForm/>
            </Modal>
        </div>
    )
}

export default TitleScreen;