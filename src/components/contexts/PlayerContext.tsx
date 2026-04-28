//IMPORTS - HOOK
import { createContext, useState, useContext, useCallback, useMemo } from "react";
import type {ReactNode} from "react"

//IMPORT - TYPES
import type { EquipableItem, PlayerContextType } from "../../data/PlayerData";
import { basicCast, Splash, Flames } from "../../data/SpellsData";



import slimeImg from "../../assets/Slime.png"

//IMPORTS - CONEXT
import {AccountContext} from "./AccountContext";
import { arcaneElement} from "../../types/ElementTypes";


//import type { Quest } from "../../data/questData";

type Props = {
    children: ReactNode
}

//Template for Player
export const PlayerContext = createContext<PlayerContextType>({
    
    playerName: "",
    equipedItems: [],
    monsterLog: [],
    questLog: [],
    bag: {
        gold: 0,
        spells: [],
        armor: [],
        weapons: [],
        potions: [],
        materials: []
    },
    bagTest: {
        gold: 500,
        spells: [],
        armor: [],
        weapons: [],
        potions: [],
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
    
    openInventory: () => {},
    isInventoryOpen: false,

    openMonsterLog: () => {},
    isMonsterLogOpen: false,

    //addNewQuest: (questid: string) => {},
    
    equipItem: () => {},
    unequipItem: () => {},

})

//Only in Provider is where you create functions and estbalish state
export function PlayerContextProvider({children}:Props){
    const acctCtx = useContext(AccountContext)
    const playerName = acctCtx.userAccount.playerName || "player"

    //const addNewQuest = (quest:object) => {  
    //}

    

/****************************************
    EQUIP - UNEQUIP ITEMS                         
***************************************/ 
    const [equipedItems, setEquipedItems] = useState<EquipableItem[]>([])
    const [isInventoryOpen, setIsInventoryOpen] = useState(false)
    const [isMonsterLogOpen, setIsMonsterLogOpen] = useState(false)
    

    const openInventory = () => {
        setIsInventoryOpen(!isInventoryOpen)
    }
    const openMonsterLog= () => {
        setIsMonsterLogOpen(!isMonsterLogOpen)
    }

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

    const bag = {
        gold: 0,
        spells: [],
        armor: [],
        weapons: [],
        potions: [],
        materials: []  
    };

    const bagTest = {
        gold: 500,
        spells : [basicCast, Splash, Flames],
        armor : [
            {id: "face_1", name: "Glasses",  category: "glasses", description: "basic wand", def: 2},
        ],
        weapons : [
            {id: "wand_1", name: "Starter Wand", description: "Starter wand for novice mages.", category:"wand", powerBoost: 0.2},
        ],
        potions : [
            {id:"healthPot_1", name: "Basic Health Potion", category: "Hp Restore", restorePts: 10, bonusEffect: "None"},
            {id:"MagicPot_1", name: "Basic Magic Potion", category: "Magic Restore", restorePts: 10, bonusEffect: "None"}
        ],
        materials:[]
    };

/**********************
 PLAYER CONTEXT OBJECT
***********************/

    const playerCtx: PlayerContextType = {
        playerName,
        stats: contextStats,
        monsterLog,
        bag,
        bagTest,
        equipedItems,
        isInventoryOpen,
        openInventory,
        openMonsterLog,
        isMonsterLogOpen,
        equipItem,
        unequipItem
    }

    return (
        <PlayerContext.Provider value={playerCtx}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider

