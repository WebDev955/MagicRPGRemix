import './App.css'
import NewGame from "../src/components/GameProgression/GameStatus/NewGame"
import TitleScreen from './components/TitleScreen'

//Imports - Context
import AccountContextProvider, { AccountContext } from './components/contexts/AccountContext' 
import BattleContextProvider from "./components/contexts/BattleContext"
import PlayerContextProvider from './components/contexts/PlayerContext'


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
        <PlayerContextProvider>
          <BattleContextProvider>
            <AppContent />
          </BattleContextProvider>
        </PlayerContextProvider>
      </AccountContextProvider>
    )
}
  

export default App