//IMPORTS - HOOK
import { createContext, useState} from "react";
import type { ReactNode } from "react";
//IMPORTS - CONEXT
    //import { AccountContext } from "./AccountContext";

//Type Definitions
type mapsUnlocked = string[];
type npcsMet = string[];
type monstersFought = string[];
type questsActive = string[];
type questsComplete = string[];

type TutorialFlags = {
    tutorialQuestAcquired: boolean,
    castleMapAccess: boolean,
    tutorialBattleDone: boolean,
    tutorialQuestComplete: boolean,
    forestMapAcquired: boolean,
    tutorialCompleted: boolean,
};

type Chapter1Flags = {
   foundVillage: boolean,
   acceptedCaveQuest: boolean,
   caveBossDefeated: boolean,
   chapter1Complete: boolean,
}

type GameFlags = {
    tutorialFlags: TutorialFlags,
    chapter1Flags: Chapter1Flags 
  };

type GlobalProgressType ={
    mapsUnlocked: mapsUnlocked;
    npcsMet: npcsMet;
    monstersFought: monstersFought;
    questsActive: questsActive,
    questsComplete: questsComplete
    gameFlags: GameFlags;
    setFlag: <C extends keyof GameFlags>(chapter: C, flagName: keyof GameFlags[C]) => void;
            // not this -> (chapter: object, flagName: string) => void;
    addNewMap: (mapId: string) => void;
    addMetNpc: (npcId: string) => void;
    addNewMons: (monsterId: string) => void;
    addActiveQuest: (questId: string) => void;
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
    questsActive: [],
    questsComplete: [],
    gameFlags: {
        tutorialFlags: {
            tutorialQuestAcquired: false,
            castleMapAccess: false,
            tutorialBattleDone: false,
            tutorialQuestComplete: false,
            forestMapAcquired: false,
            tutorialCompleted: false,
        },
        chapter1Flags: {
            foundVillage: false,
            acceptedCaveQuest: false,
            caveBossDefeated: false,
            chapter1Complete: false,
        },
    },

    setFlag: () => {},
    addNewMap:() => {},
    addMetNpc: () => {},
    addNewMons: () => {},
    addActiveQuest: () => {},
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
    const [questsActive, setQuestsActive] = useState<questsActive>([])
    const [questsComplete, setQuestsComplete] = useState<questsComplete>([])
    
    const [gameFlags, setGameFlags] = useState<GameFlags>({
        tutorialFlags: {
            tutorialQuestAcquired: false,
            castleMapAccess: false,
            tutorialBattleDone: false,
            tutorialQuestComplete: false,
            forestMapAcquired: false,
            tutorialCompleted: false,
        },
        chapter1Flags: {
            foundVillage: false,
            acceptedCaveQuest: false,
            caveBossDefeated: false,
            chapter1Complete: false,
        },
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

    const addActiveQuest = (questId: string) => {
        setQuestsActive(prevQuest => 
            [...prevQuest, questId]
        )
    }
    const addCompletedQuest = (questId: string) => {
        setQuestsComplete(prevQuest => 
            [...prevQuest, questId]
        )

        //remove a previously active quest from the Activelist
        setQuestsActive(prev => prev.filter(id => id !== questId))
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
    const GlobalProgressCtx:GlobalProgressType = {
        gameFlags,
        setFlag,

        mapsUnlocked,
        addNewMap,

        npcsMet,
        addMetNpc,

        monstersFought,
        addNewMons, 

        questsActive,
        addActiveQuest,

        questsComplete,
        addCompletedQuest,
    }

    return (
        <GlobalProgress.Provider value={GlobalProgressCtx}>
            {children}
        </GlobalProgress.Provider>
    )
}

