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
type currentMapType = string 

type battleType = {
    enemyId: string,
    battleActive: boolean,
};

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
        ) => void;
    
    renderBattle : (enemyId: string) => void,

    exitBattle: () => void,

    currentMap: currentMapType,
    scene: sceneType
    battle: battleType
};

//Template for Scenes
export const SceneContext = createContext<SceneProviderType>({
	renderScene: () => {},
    renderBattle: () => {},
    exitBattle: () => {},
    
    currentMap: "castle",

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

    const [battle, setBattle] = useState<battleType>({
        enemyId: "",
        battleActive: false,
     })     
	 
	const renderScene = (eventType: string|null, sceneId: string, bgImg: string, 
        npcId: string | null, villageId: string | null, mapType:string) => {
        
        const newScene:sceneType = {
            eventType: eventType,
            sceneId: sceneId,
            bgImg: bgImg,
            npcId: npcId,
            villageId: villageId
        }
        setScene(newScene)
        setCurrentMap(mapType)
        
	}
    const renderBattle = (enemyId: string) => {
        const newBattle:battleType = {
            enemyId: enemyId,
            battleActive: true 
        }
        setBattle(newBattle)
        setCurrentMap(currentMap)
    }

    const exitBattle = () => {
        setBattle({
            enemyId:"",
            battleActive: false
        })
    } 
	
/**********************
 PLAYER CONTEXT OBJECT
***********************/
	const sceneCtx:SceneProviderType = {
        scene,
        currentMap,
        battle,
        exitBattle,
        renderScene,
        renderBattle,
	}
    return (
        <SceneContext.Provider value={sceneCtx}>
            {children}
        </SceneContext.Provider>
    )
	 
}
export default SceneContextProvider;
