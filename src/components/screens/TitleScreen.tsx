//HOOKS - HOOKS
import {useContext, useEffect, useRef} from "react";
//IMPORTS - COMPONENTS 
import PlayerCreationForm from "../UI/Forms/PlayerCreationForm"
import Button from "../UI/Button";
import Modal from "../UI/Modal"
//IMPORT - CONTEXT
import { AccountContext } from "../contexts/AccountContext"
//IMPORT - STYLES/MUSIC
import TitleTheme from "../../assets/TitleTheme.mp3"
import modalStyle from "../UI/Modal.module.css"
import style from "./TitleScreen.module.css"

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
        <main className = {style.titleScreenWrapper}>
            <audio ref={audioRef} src={TitleTheme} loop/>
            <p>Magic RPG</p>
            <section className={style.titleMenu}>
                <Button onClick={handleCreateAccount}>Enroll</Button>
                <Button>Continue Studies</Button>
            </section>
            <Modal open={accountCtx.isCreatingAccount} className={modalStyle.signUpModal}>
                <PlayerCreationForm/>
            </Modal>
        </main>
    )
}

export default TitleScreen;