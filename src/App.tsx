import './App.css'
import NewGame from "../src/components/GameProgression/GameStatus/NewGame"
import TitleScreen from './components/TitleScreen'

//Imports - Context
import AccountContextProvider from './components/contexts/AccountContext' 
import { AccountContext } from './components/contexts/AccountContext' 
import { useContext } from 'react'

function AppContent() {
  const accountCtx = useContext(AccountContext)
  
  return (
      <>
       {accountCtx.isLoggedIn
        ? <NewGame/>
        : <TitleScreen/>
      }
    </>
  )
}

  function App() {
    return (
      <AccountContextProvider>
        <AppContent />
      </AccountContextProvider>
    )
}
  

export default App