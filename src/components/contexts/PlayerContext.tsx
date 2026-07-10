//IMPORTS - HOOK
import {createContext, useState, useContext, useCallback, useMemo, useEffect } from "react";
import type {ReactNode} from "react"
//IMPORT - TYPES
import { type QuestLogType, type EquipableItem, type PlayerContextType, type BagType } from "../../data/PlayerData";
import { basicCast, Splash, Flames } from "../../data/SpellsData";
//IMPORT - DATA
import { QuestList } from "../../data/QuestData";
import slimeImg from "../../assets/SlimeMonster.svg"

//IMPORTS - CONEXT
import {AccountContext} from "./AccountContext";
import { arcaneElement} from "../../types/ElementTypes";
//import QuestLog from "../menus/QuestLog";
//import type { Quest } from "../../data/questData";

type Props = {
    children: ReactNode
}

//Template for Player
export const PlayerContext = createContext<PlayerContextType>({
    
/***Player Full Context- Function + State***/ 
    playerName: "",
    equipedItems: [],
    monsterLog: [],
    questLog: [],
    bag: {
        gold: 500,
        spells: [basicCast, Splash, Flames],
        armor: [
            {id: "hat_1", name: "Novice Mage Hat",  category: "Hats", description: "Well worn mage hat.", def: 2},
            {id: "glasses_1", name: "Novice Mage Glasses",  category: "Glasses", description: "Average spectacles.", def: 2},
            {id: "robes_1", name: "Novice Mage Robe",  category: "Robes", description: "Some comfy defense.", def: 2},
            {id: "boots_1", name: "Novice Mage Boots",  category: "Boots", description: "Warm boots.", def: 2},
        ],
        weapons: [
            {id: "wand_1", name: "Starter Wand", description: "Starter wand for novice mages.", category:"wand", powerBoost: 0.2},
            {id: "staff_1", name: "Starter Staff", description: "Starter staff for novice mages.", category:"staff", powerBoost: 0.5},
        ],
        potions: [
            {id:"healthPot_1", name: "Basic Health Potion", category: "Hp Restore", restorePts: 10, bonusEffect: "None"},
            {id:"MagicPot_1", name: "Basic Magic Potion", category: "Magic Restore", restorePts: 10, bonusEffect: "None"}
        ],
        materials: []
    },
    stats: {
        hp: 25,
        mp: 30,
        def: 0,
        speed: 5,
        channeledElement: undefined,
        buffs: [],
        debuffs: []
    },
/***Inventory - Function + State***/ 
    openInventory: () => {},
    isInventoryOpen: false,
/***MonsterLog - Function + State***/ 
    openMonsterLog: () => {},
    isMonsterLogOpen: false,
/***Updating Quests, QuestLog - Function + State***/ 
    addNewQuest: () => {},
    updateQuest : () => {},
    openQuestLog: () => {},
    isQuestLogOpen: false,
/***EquipItem - Function***/ 
    equipItem: () => {},
    unequipItem: () => {},
/***PlayerGuide - Function + State***/ 
    openPlayerGuide: () => {},
    isPlayerGuideOpen: false,
})
//Only in Provider is where you create functions and estbalish state
export function PlayerContextProvider({children}:Props){
/****************************************
ESTABLISH CONTEXT                       
***************************************/ 
    const acctCtx = useContext(AccountContext)
    const playerName = acctCtx.userAccount.playerName;
/****************************************
ESTABLISH DEFAULT STATES                   
***************************************/ 
    const [equipedItems, setEquipedItems] = useState<EquipableItem[]>([])
    const [bag, setBag] = useState<BagType>({
        gold: 500,
        spells: [basicCast, Splash, Flames],
        armor: [
            {id: "hat_1", name: "Novice Mage Hat",  category: "Hats", description: "Well worn mage hat.", def: 2},
            {id: "glasses_1", name: "Novice Mage Glasses",  category: "Glasses", description: "Average spectacles.", def: 2},
            {id: "robes_1", name: "Novice Mage Robe",  category: "Robes", description: "Some comfy defense.", def: 2},
            {id: "boots_1", name: "Novice Mage Boots",  category: "Boots", description: "Warm boots.", def: 2},
        ],
        weapons: [
            {id: "wand_1", name: "Starter Wand", description: "Starter wand for novice mages.", category:"wand", powerBoost: 0.2},
        ],
        potions: [
            {id:"healthPot_1", name: "Basic Health Potion", category: "Hp Restore", restorePts: 10, bonusEffect: "None"},
            {id:"MagicPot_1", name: "Basic Magic Potion", category: "Magic Restore", restorePts: 10, bonusEffect: "None"}
        ],
        materials: []
    })
    const [isInventoryOpen, setIsInventoryOpen] = useState(false)
    const [isMonsterLogOpen, setIsMonsterLogOpen] = useState(false)
    const [questLog, setQuestLog] = useState<QuestLogType[]>([])
    const [isQuestLogOpen, setIsQuestLogOpen] = useState(false)
    const [isPlayerGuideOpen, setIsPlayerGuideOpen] = useState(false)
/****************************************
FUNCTIONS - OPEN/CLOSE MENUS                 
***************************************/ 
    const openInventory = () => {
        setIsInventoryOpen(!isInventoryOpen)
    }
    const openMonsterLog = () => {
        setIsMonsterLogOpen(!isMonsterLogOpen)
    }
    const openQuestLog = () =>{
        setIsQuestLogOpen(!isQuestLogOpen)
    }
    const openPlayerGuide = () => {
        setIsPlayerGuideOpen(!isPlayerGuideOpen)
    }
/****************************************
    EQUIP - UNEQUIP ITEMS                         
***************************************/ 
    const equipItem = (item: EquipableItem) => {
        setEquipedItems(prevItems => {
            const alreadyEquipped = prevItems.some(i => i.id === item.id)
            if (alreadyEquipped) return prevItems;
            return [...prevItems, item]
        });
    };

    const unequipItem = useCallback((item: EquipableItem) => {
        setEquipedItems(prevItems =>
            prevItems.filter(i => i.id !== item.id)
        );
    }, []);
/****************************************
   QUESTS (ADD QUEST, UPATE QUEST STATUS)                  
***************************************/ 
    const addNewQuest = (questId:string) => {
        const foundQuest = QuestList.find(quest=> quest.id === questId)
        if (!foundQuest) return 

        setQuestLog (prevQuests => {
             const alreadyAdded = prevQuests.some(quest => quest.id === questId)
             if (alreadyAdded) return prevQuests 
             return [...prevQuests, foundQuest]
        })
        alert(`${foundQuest.name} added to Quest Log!`)
    }
                   
    const updateQuest = (questId: string) => {
        setQuestLog(prevQuests => {
            return prevQuests.map(quest => {
                if (quest.id === questId) {
                    return { ...quest, isQuestComplete: true }
                } else {
                    return quest
                }
            })
        })
    }    

/****** TOTAL DEFENSE FROM EQUIPPED ITEMS**************/
const contextStats = useMemo(() => {
    const totalDef = equipedItems.reduce((sum, item) => sum + (item.def || 0), 0);
        return {
            hp: 25,
            mp: 30,
            def: totalDef,
            speed: 5,
            channeledElement: arcaneElement,
            buffs: [],
            debuffs: [],
        };
  }, [equipedItems]);
/**************************************
    END EQUP-UNEQUIP ITMES
**************************************/
/**************************************
    USE EFFECTs - UPDATE LOCAL STORAGE STATE
**************************************/

/***LOAD DATA***/
    useEffect(() => {
        if (!playerName) return
        const savedPlayerData = localStorage.getItem(`gameData_${playerName}`)
        if (savedPlayerData) {
            const parsed = JSON.parse(savedPlayerData)
            // hydrating from localStorage on the render where playerName first arrives from AccountContext
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setEquipedItems(parsed.equipedItems)
            setQuestLog(parsed.questLog)
            setBag(parsed.bag)
        }
    },[playerName]);

/***SAVE DATA***/
    useEffect(() => {
        if (!playerName) return
        localStorage.setItem(`gameData_${playerName}`, 
            JSON.stringify({ 
                equipedItems, 
                questLog, 
                bag 
            }))
    },[playerName, equipedItems, questLog, bag]);

    const monsterLog = [
		 {    name: "Slime",
			  id: "Mon_001",
              monsterNum: "001",
			  bio: "A weak slimy blob without much fight in it.",
			  img: slimeImg,
			  element: "Neutral",
			  description: "A slimey, goopy, slippery creature of little concern.",
			  spawnLoc: ["Castle", "Forest"],
			  lootDrops: [{   
                name: "Slime Goo",
				id: "MonLoot_Slime_001",
				desc: "An elementless goopy substance. Mixed with the right elements, its chemistry could be reforged into something more useful."
            }],
    }]  

/**********************
 PLAYER CONTEXT OBJECT
***********************/
    const playerCtx: PlayerContextType = {
        playerName,
        stats: contextStats,
        bag,
        equipedItems,
        isInventoryOpen,
        openInventory,
        
        monsterLog,
        openMonsterLog,
        isMonsterLogOpen,
        
        equipItem,
        unequipItem,
        
        questLog,
        addNewQuest,
        updateQuest,
        isQuestLogOpen,
        openQuestLog,
        isPlayerGuideOpen,
        openPlayerGuide,
    }
    return (
        <PlayerContext.Provider value={playerCtx}>
            {children}
        </PlayerContext.Provider>
    );
}
export default PlayerContextProvider