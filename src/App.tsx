import './App.css'
//import NewGame from "../src/components/GameProgression/GameStatus/NewGame"
import TitleScreen from './components/TitleScreen'

//Imports - Context
import AccountContextProvider, { AccountContext } from './components/contexts/AccountContext' 
import BattleContextProvider from "./components/contexts/BattleContext"
import PlayerContextProvider from './components/contexts/PlayerContext'
import SceneContextProvider from "./components/contexts/SceneContext"
import ConversationContextProvider from './components/contexts/ConversationContext'
import { GlobalProgressContextProvider } from './components/contexts/GlobalPrgressContext'

import Game from './components/Game'


import { useContext } from 'react'

function AppContent() {
  const accountCtx = useContext(AccountContext)
  
  return (
      <>
       {accountCtx.isLoggedIn
        ? <Game/>
        : <TitleScreen/>
      }
    </>
  )
}

  function App() {
    return (
  <AccountContextProvider>
    <GlobalProgressContextProvider>
      <PlayerContextProvider>
          <SceneContextProvider>
            <ConversationContextProvider>
              <BattleContextProvider>
                  <AppContent/>
            </BattleContextProvider>
          </ConversationContextProvider>
        </SceneContextProvider>
      </PlayerContextProvider>
    </GlobalProgressContextProvider>
  </AccountContextProvider>
    )
}
  

export default App