//IMPORTS - HOOKS
import { useContext, useEffect } from 'react'
//IMPORTS - Components 
import TitleScreen from './components/screens/TitleScreen'
import Game from './components/screens/Game'
//IMPORTS - Style
import './App.css'
//Imports - Context
import AccountContextProvider, { AccountContext } from './components/contexts/AccountContext' 
import BattleContextProvider from "./components/contexts/BattleContext"
import PlayerContextProvider from './components/contexts/PlayerContext'
import SceneContextProvider from "./components/contexts/SceneContext"
import ConversationContextProvider from './components/contexts/ConversationContext'
import { GlobalProgressContextProvider } from './components/contexts/GlobalPrgressContext'






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

function AppContent() {
  const accountCtx = useContext(AccountContext)
  const playerLoggedIn = accountCtx.isLoggedIn

 console.log(playerLoggedIn)
  
  return (
        <>
          {playerLoggedIn
            ? <Game/>
            : <TitleScreen/>
          }
      </>
    )
}

  
  

export default App