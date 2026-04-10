//HOOKS
import {useContext} from "react";

//COMPONENT IMPORTS
import PlayerCreationForm from "./UI/Forms/PlayerCreationForm"
import Button from "./UI/Button";
//CONTEXT
import { AccountContext } from "../components/contexts/AccountContext"

const TitleScreen = () => {
    const accountCtx = useContext(AccountContext)
    
    const handleCreateAccount = () => {
        accountCtx.startCreatingAccount()
    }
    
    return (
        <div>
            <h1>Magic RPG</h1>
            <Button onClick={handleCreateAccount}>New Game</Button>
            <Button>Login</Button>
            <PlayerCreationForm/>
        </div>
    )
}

export default TitleScreen;