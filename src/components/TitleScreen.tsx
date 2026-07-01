//HOOKS - HOOKS
import {useContext, useEffect, useRef} from "react";
//IMPORTS - COMPONENTS 
import PlayerCreationForm from "./UI/Forms/PlayerCreationForm"
import Button from "./UI/Button";
//IMPORT - CONTEXT
import { AccountContext } from "../components/contexts/AccountContext"
//IMPORT - STYLES/MUSIC
import TitleTheme from "../assets/TitleTheme.mp3"
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
            <PlayerCreationForm/>
        </div>
    )
}

export default TitleScreen;