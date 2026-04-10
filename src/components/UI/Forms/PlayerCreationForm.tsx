//IMPORT - HOOKS
import { useContext} from "react"
import * as React from "react";
//IMPORT - CONTEXT
//import { PlayerContext } from "../../Contexts/PlayerContext"
import { AccountContext } from "../../contexts/AccountContext";
//IMPORT - COMPONENTS
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"
//IMPORT - Styles
import style from "../../UI/Modal.module.css"


const PlayerCreationForm = () => {
    //const playerContext = useContext(PlayerContext)
    const accountCtx = useContext(AccountContext)!; // "!" tellls TypeScript "Trust me, it exissts"

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData (event.currentTarget)
        const playerName = formData.get('playerName') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        

        const newAccountData = {
            playerName,
            email,
            password,
        }
        
        accountCtx.createAccount(newAccountData)
        accountCtx.stopCreatingAccount()
    }

    return(
        <>
            <Modal open={accountCtx.isCreatingAccount} className={style.signUpModal}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Button>Close</Button>
                        <h2>Create Account</h2>
                        <Input
                            label= "Player Name: "
                            id = "playerName"
                            name="playerName" 
                        />
                        <Input
                            label= "Email: "
                            id = "email"
                            name="email"
                        />
                        <Input
                            label= "Password: "
                            id = "password"
                            name="password"
                        />
                        <Button type="submit">Create Player!</Button>
                    </div>
                </form> 
            </Modal>
        </>
    )
}

export default PlayerCreationForm