//IMPORT - Hooks
import { createContext, useState} from "react";
import type { ReactNode } from "react";

	
//Type Definitions 

type ConversationProviderType = {
    renderDialogue: string,
    displayDialogue: (value: string) => void,
}
	type Props = {
	    children: ReactNode;
	};
	
//Template for Scenes
	export const ConversationContext = createContext<ConversationProviderType>({
        renderDialogue: "default",
        displayDialogue:(_value:string) => {}
	})
		
	//Provider - where you create functions and estbalish state
	export function ConversationContextProvider({children}:Props){

        const [renderDialogue, setRenderDialogue] = useState("default")

        const displayDialogue = (value: string) => {
            setRenderDialogue(value)
        }

/**********************
PLAYER CONTEXT OBJECT
***********************/
	const convoCtx:ConversationProviderType = {
          renderDialogue,
          displayDialogue
		}

	return (
	    <ConversationContext.Provider value={convoCtx}>
	        {children}
	    </ConversationContext.Provider>
	)
}
export default ConversationContextProvider;
