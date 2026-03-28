import { createContext, useState} from "react";
import type { ReactNode } from "react";

type UserAccount = {
    playerName: string | undefined;
    password: string | undefined;
    email: string | undefined;
}

type AccountContextType = {
    userAccount: UserAccount;
    isCreatingAccount: boolean;
    //isLoggingIn: boolean;
    isLoggedIn: boolean;
    createAccount: (data: UserAccount) => void;
    startCreatingAccount: () => void;
    stopCreatingAccount: () => void;
}

type Props = {
    children: ReactNode;
};


//NO SATE/HOOKS when creating context
//its just a template
// eslint-disable-next-line react-refresh/only-export-components
export const AccountContext = createContext<AccountContextType>({
    userAccount: {
        playerName: undefined,
        password: undefined,
        email: undefined,
    },

    isCreatingAccount: false,
    //isLoggingIn: false,
    isLoggedIn: false,
    createAccount: () => {},
    startCreatingAccount: () => {},
    stopCreatingAccount: () => {},
    //startLoggingIn: () => {},
    //stopLoggingIn: () => {},
    //verifyLogin: () => {},
    //logOut: () => {}
});

//Only in Provider is where you create functions and estbalish state
const AccountContextProvider = ({children}:Props) => {
    const [userAccount, setUserAccount] = useState({
        playerName: undefined,
        password: undefined,
        email: undefined,
    })

/**********************
 ACCOUNT CREATION
***********************/
    //State - open/closes Create Account Modal
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    
    //Functions- open/close create modal 
    function startCreatingAccount(){
        setIsCreatingAccount(true)
    }
    function stopCreatingAccount(){
        setIsCreatingAccount(false)
    }

    //Function - create and store user account info, login user 
    function createAccount(newAccountData: UserAccount){
        setUserAccount(userAccount)
        localStorage.setItem("user", JSON.stringify(newAccountData))
        setIsLoggedIn(!isLoggedIn)
    }
    
/**********************
 LOGIN/LOGOUT 
***********************/
    
    //STATE - open/closes Login  Modal
    //const [isLoggingIn, setIsLoggingIn] = useState(false)
    
    //STATE - display current player location/Tutorial at start
    const [isLoggedIn, setIsLoggedIn] = useState(false)




/**********************
 ACCOUNT CONTEXT OBJECT
***********************/
    const accountCtx = {
        userAccount,
        isCreatingAccount,
        isLoggedIn,
        //isLoggingIn,
        startCreatingAccount,
        stopCreatingAccount,
        createAccount,
    }

return (
        <AccountContext.Provider value={accountCtx}>
            {children}
        </AccountContext.Provider>
    );
}


export default AccountContextProvider
