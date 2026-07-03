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
import Modalstyle from "../../UI/Modal.module.css"
import style from "../../UI/Forms/PlayerCreationForm.module.css"

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
        console.log(newAccountData)
        console.log(accountCtx.createAccount)
        accountCtx.stopCreatingAccount()
    }

    return(
        <Modal open={accountCtx.isCreatingAccount} className={Modalstyle.signUpModal}>
            <form onSubmit={handleSubmit} className= {style.formWrapper}>
                <Button>Close</Button>
                <section className={style.welcomeWrapper}>
                    <p>"Ah, so you have chosen to join us? Please provide us your name and your lessons shall begin!"</p>
                  
                </section>
                <Input
                    label= "Player Name: "
                    id = "playerName"
                    name="playerName" 
                />
            <Button type="submit">Create Player!</Button>
        </form> 
    </Modal>
    )
}

export default PlayerCreationForm