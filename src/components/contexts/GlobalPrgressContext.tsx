//IMPORTS - HOOK
import { createContext, useState} from "react";
import type { ReactNode } from "react";
//IMPORTS - CONEXT
    //import { AccountContext } from "./AccountContext";

//Type Definitions
type mapsUnlocked = string[];
type npcsMet = string[];
type monstersFought = string[];
type questsComplete = string[];

type TutorialFlags = {
   wizSpokenTo: boolean,
   castleMapAccess: boolean,
   tutorialBattleDone: boolean
};

type GameFlags = {
  tutorial: TutorialFlags
  }[];

type GlobalProgressType ={
    mapsUnlocked: mapsUnlocked;
    npcsMet: npcsMet;
    monstersFought: monstersFought;
    questsComplete: questsComplete
    gameFlags: GameFlags;
    setFlag: <C extends keyof GameFlags>(chapter: C, flagName: keyof GameFlags[C]) => void;
            // not this -> (chapter: object, flagName: string) => void;
    addNewMap: (mapId: string) => void;
    addMetNpc: (npcId: string) => void;
    addNewMons: (monsterId: string) => void;
    addCompletedQuest: (questId: string) => void;
};

type Props = {
    children: ReactNode;
};

//Template for Player
export const GlobalProgress =  createContext<GlobalProgressType>({
    mapsUnlocked: [],
    npcsMet: [],
    monstersFought: [],
    questsComplete: [],
    gameFlags: [],

    setFlag: () => {},
    addNewMap:() => {},
    addMetNpc: () => {},
    addNewMons: () => {},
    addCompletedQuest : () => {}
});

//Only in Provider is where you create functions and estbalish state
export const GlobalProgressContextProvider = ({children}:Props) => {
    
/*****************************************
  GLOBAL UPDATE FUNCTIONS              
***************************************/
    const [mapsUnlocked, setMapsUnlocked] = useState<mapsUnlocked>([])
    const [npcsMet, setMetNpcs] = useState<npcsMet>([])
    const [monstersFought, setMonstersFought] = useState<monstersFought>([])
    const [questsComplete, setQuestsComplete] = useState<questsComplete>([])
    
    const [gameFlags, setGameFlags] = useState<GameFlags>({
        tutorial: {
            wizSpokenTo: false,
            castleMapAccess: false,
            tutorialBattleDone: false
        }
    })
    
    const addNewMap = (mapId:string) => {
        setMapsUnlocked(prevMaps => 
            [...prevMaps, mapId]
        )
    }    
    const addMetNpc = (npcId:string) => {
        setMetNpcs(prevNpcs => 
            [...prevNpcs, npcId]
        )
    }
    const addNewMons = (monsId:string) => {
        setMonstersFought(prevMons =>
            [...prevMons, monsId]
        )
    }
    const addCompletedQuest = (questId: string) => {
        setQuestsComplete(prevQuest => 
        [...prevQuest, questId]
        )
    }

    const setFlag = <C extends keyof GameFlags> (chapter: C, flagName: keyof GameFlags[C]) => {
        setGameFlags(prevFlags => ({
        ...prevFlags,
        [chapter] : {
            ...prevFlags[chapter],
            [flagName]: true
        }
        }))
    }
/**************************************
    END UPDATE FUNCTIONS
**************************************/
    const GlobalProgressCtx = {
        gameFlags,
        setFlag,

        mapsUnlocked,
        addNewMap,

        npcsMet,
        addMetNpc,

        monstersFought,
        addNewMons, 

        questsComplete,
        addCompletedQuest,
    }

    return (
        <GlobalProgress.Provider value={GlobalProgressCtx}>
            {children}
        </GlobalProgress.Provider>
    )
}

