//IMPORTS - HOOK
import { createContext, useState, useContext, useEffect, useCallback } from "react";
//IMPORTS - CONEXT
import { AccountContext } from "./AccountContext";

//Template for Player
export const GlobalProgress = createContext({
    mapsUnlocked: [],
    npcsMet: [],
    monstersFought: [],
    objectives: [],    
    addNewMap:() => {},
    addMetNpc: () => {},
    addNewMons: () => {},
    
    spokToWiz: () => {},
    castleAccess: () => {}
    

})

    

//Only in Provider is where you create functions and estbalish state
export function GlobalProgressContextProvider({children}){
    
/*****************************************
  FLAGS                 
***************************************/    
    
/******** CHAPTER 0 - TUTORIAL ************
*  1) Speak to Wizard
*  2) Get access to castle/Castle map
*  3) complete tuotiral battle
*  4) get access to Fores/Fores Map
***************************************/ 

    const [wizSpokenTo, setWizSpokenTo] = useState()
    const [castleMapAccess, setCastleMapAccess] = useState()
    const [tutorialBattleDone, setTutorialBattleDone] = useState()
    
    function spokeToWiz(){
        setWizSpokenTo(true)
    }
    
    function castleAccess(){
      setCastleMapAccess(true)
    }
    
    function tutorialDone(){
      setTutorialBattleDone(true)
    }
    

/*****************************************
  GLOBAL UPDATE FUNCTIONS              
***************************************/
    const [mapsUnlocked, setMapsUnlocked] = useState([])
    const [metNpcs, setMetNpcs] = useState([])
    const [monsFought, setMonsFought] = useState([])
    
    
    
    function addNewMap(mapId){
        setMapsUnlocked (prevMaps => 
            [...prevMaps, mapId]
        )
        
    }    
        
    function addMetNpc(npcId){
        setMetNpcs(prevNpcs => 
            [...prevNpcs, npcId]
        )
    }
    
    function addNewMons(monsId){
        setMonsFought(prevMons =>
            [...prevMons, monsId]
        )
    }

/**************************************
    END UPDATE FUNCTIONS
**************************************/
    
    const GlobalProgressCtx = {
        mapsUnlocked,
        npcsMet,
        //monstersFought,
        
        addNewMap,
        addMetNpc,
        addNewMons
    }

    return (
        <GlobalProgress.Provider value={GlobalProgressCtx}>
            {children}
        </GlobalProgress.Provider>
    )
}

