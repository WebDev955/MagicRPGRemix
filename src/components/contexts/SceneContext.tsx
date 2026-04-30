//IMPORT - Hooks
import { createContext, useState} from "react";
import type { ReactNode } from "react";

//Type Definitions 
type sceneType = {
    eventType: string | null,
    sceneId: string,
    bgImg: string,
    npcId: string | null,
    villageId: string | null,
};

type battleType = {
    enemyId: string,
    battleActive: boolean,
};

type currentMapType = string
type playerLocationType = string
type isSceneOpenType = boolean

type Props = {
    children: ReactNode;
};

export type SceneProviderType = {
    renderScene: (
        eventType: string | null, 
        sceneId: string, 
        bgImg: string,
        npcId:string  | null, 
        villageId: string  | null,
        mapType: string,
        gridCord: string,
        ) => void;
    
    renderBattle : (enemyId: string, playerLocation: string) => void,

    exitBattle: () => void,
    exitScene: () => void,

    currentMap: currentMapType,
    scene: sceneType
    battle: battleType
    playerLocation: playerLocationType
    isSceneOpen: isSceneOpenType
};

//Template for Scenes
export const SceneContext = createContext<SceneProviderType>({
	renderScene: () => {},
    renderBattle: () => {},
    exitBattle: () => {},
    exitScene: () => {},
    
    currentMap: "castle",
    playerLocation: "6,3",
    isSceneOpen: false,

    scene: {
        eventType: "",
        sceneId: "",
        bgImg: "",
        npcId: null,
        villageId: null,
    },

    battle: {
        enemyId: "",
        battleActive: false,
    }
})
	
//Provider - where you create functions and estbalish state
export function SceneContextProvider({children}:Props){

	 const [scene, setScene] = useState<sceneType>({
        eventType: null,
        sceneId: "",
        bgImg: "",
        npcId: null,
        villageId: null,
     })

     const [currentMap, setCurrentMap] = useState<currentMapType>(
        "castle"
     )
    const [playerLocation, setPlayerLocation] = useState<playerLocationType>(
        "6,3"
     )

    const [isSceneOpen, setIsSceneOpen] = useState<isSceneOpenType>(
        false
    )

    const [battle, setBattle] = useState<battleType>({
        enemyId: "",
        battleActive: false,
     })     
	 
	const renderScene = (eventType: string|null, sceneId: string, bgImg: string, 
        npcId: string | null, villageId: string | null, mapType:string,  gridCord: string) => {
        
        const newScene:sceneType = {
            eventType: eventType,
            sceneId: sceneId,
            bgImg: bgImg,
            npcId: npcId,
            villageId: villageId
        }
        setIsSceneOpen(!isSceneOpen)
        setScene(newScene)
        setPlayerLocation(gridCord)
        setCurrentMap(mapType)
	}

    const renderBattle = (enemyId: string, gridCord: string) => {
        const newBattle:battleType = {
            enemyId: enemyId,
            battleActive: true 
        }
        setBattle(newBattle)
        setCurrentMap(currentMap)
        setPlayerLocation(gridCord)
    }

    const exitBattle = () => {
        setBattle({
            enemyId:"",
            battleActive: false
        })
    } 

    const exitScene = () => {
        setScene({
            eventType: null,
            sceneId: "",
            bgImg: "",
            npcId: null,
            villageId: null,
        })
    }
	
/**********************
 PLAYER CONTEXT OBJECT
***********************/
	const sceneCtx:SceneProviderType = {
        scene,
        currentMap,
        battle,
        playerLocation,
        isSceneOpen,
        renderBattle,
        exitBattle,
        renderScene,  
        exitScene,
	}
    return (
        <SceneContext.Provider value={sceneCtx}>
            {children}
        </SceneContext.Provider>
    )
}
export default SceneContextProvider;
