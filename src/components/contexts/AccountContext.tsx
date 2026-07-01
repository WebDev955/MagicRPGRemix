//IMPORT - HOOKS
import { createContext, useEffect, useState} from "react";
import type { ReactNode } from "react";

// CREATE TYPES 
type UserAccount = {
    playerName: string | undefined;
    email: string | undefined;  
    password: string | undefined;
}
type AccountContextType = {
    userAccount: UserAccount;
    isCreatingAccount: boolean;
    //isLoggingIn: boolean;
    isLoggedIn: boolean;
    createAccount: (data: UserAccount) => void;
    startCreatingAccount: () => void;
    stopCreatingAccount: () => void;
    logOut: () => void;
}
type Props = {
    children: ReactNode;
};

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
    logOut: () => {},
    //startLoggingIn: () => {},
    //stopLoggingIn: () => {},
    //verifyLogin: () => {},
    
});

//Only in Provider is where you create functions and estbalish state
const AccountContextProvider = ({children}:Props) => {
    const [userAccount, setUserAccount] = useState<UserAccount>({
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
        localStorage.setItem("userPlayer", JSON.stringify(newAccountData)) 
        setUserAccount(newAccountData)
        setIsLoggedIn(true)
    }
    
/**********************
 LOGIN/LOGOUT 
***********************/
    //STATE - open/closes Login  Modal
    //const [isLoggingIn, setIsLoggingIn] = useState(false)
    
    //STATE - display current player location/Tutorial at start
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logOut = () => {
        setIsLoggedIn(false)
    }

   useEffect(() => {
    const savedUser = localStorage.getItem("userPlayer")
        if (savedUser) {
            setUserAccount(JSON.parse(savedUser))      
            setIsLoggedIn(true)
        }
        return
  },[]);

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
        logOut
    }

return (
        <AccountContext.Provider value={accountCtx}>
            {children}
        </AccountContext.Provider>
    );
}


export default AccountContextProvider
