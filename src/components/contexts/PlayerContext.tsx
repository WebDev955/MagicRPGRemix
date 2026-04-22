//IMPORTS - HOOK
import { createContext, useState, useContext, useCallback, useMemo } from "react";
import type {ReactNode} from "react"

import slimeImg from "../../assets/Slime.png"

//IMPORTS - CONEXT
import { AccountContext} from "./AccountContext";

//import type { Quest } from "../../data/questData";

export type EquipableItem = {
    type?: string
    def?: number
    powerBoost?: number
    ability?: string
    id: string
}

export type playerContextType = {
    playerName: string,
    equipedItems: EquipableItem[],
    monsterLog: {  
	  	name: string,
		id: string,
        monsterNum: string,
		bio: string,
		img: string,
		element: string,
		description: string,
		spawnLoc: string[],
		lootDrops: {
			name: string,
			id: string,
			desc: string
	    }[],
    }[],  

    //questLog: {
        //quest: Quest
    //}[]

    inventory: {
        gold: number,
        spells: {
            spellId: string,
            spellName: string,
            element: string,
            mp: number,
            power: number, 
            buff: string,
            debuff: string,
            effect: string,
            description: string
        }[],

        armor: {
            type: string, 
            def: number, 
            ability: string,
            id: string,
            description: string
        }[],

        weapons: {
            id: string, 
            type: string,
            powerBoost: number,
            ability: string
        }[],

        potions: {
            id: string, 
            type: string,
            restorePts: number,
            bonusEffect: string
        }[]
    },
    stats : {
        hp: number,
        mp: number,
        def: number,
        speed: number,
        channeledElement: string,
        buffs: string[],
        debuffs: string[],
    },

    inventoryTest: {
        gold: number,
        spells: {
            spellId: string, 
            spellName: string,
            element: string,
            mp: number,
            power: number, 
            buff: string,
            debuff: string,
            effect: string,
            description: string
        }[],
        armor: {  
            id: string
            name: string,
            category: string, 
            def: number, 
            ability: string,
            description: string
        }[],
        weapons: {
            id: string,
            name: string, 
            category: string,
            powerBoost: number,
            ability: string
        }[],
        potions: {
            id: string, 
            name: string,
            category: string,
            restorePts: number,
            bonusEffect: string
        }[]
    },
    openInventory: () => void,
    isInventoryOpen: boolean,

    openMonsterLog: () => void,
    isMonsterLogOpen: boolean,

    //addNewQuest: (quest:object) => void;

    equipItem: (item: EquipableItem) => void;
    unequipItem: (item: EquipableItem) => void;
}

type Props = {
    children: ReactNode
}

//Template for Player
export const PlayerContext = createContext<playerContextType>({
    
    playerName: "",
    equipedItems: [],
    monsterLog: [],
    //questLog: [],

    inventory: {
        gold: 0,
        spells: [],
        armor: [],
        weapons: [],
        potions: []
    },

    inventoryTest: {
        gold: 500,
        spells: [],
        armor: [],
        weapons: [],
        potions: [],
    },

    stats: {
        hp: 25,
        mp: 30,
        def: 0,
        speed: 5,
        channeledElement: "",
        buffs: [],
        debuffs: []
    },
    openInventory: () => {},
    isInventoryOpen: false,

    openMonsterLog: () => {},
    isMonsterLogOpen: false,

    //addNewQuest: () => {},
    
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
            channeledElement: "",
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

    const inventory = {
        gold: 0,
        spells: [],
        armor: [],
        weapons: [],
        potions: []
    };

    const inventoryTest = {
        gold: 500,
        spells : [
            {   spellId: "BasicCast_1",
                spellName: "Basic Cast", 
                element:"None", 
                mp: 0, 
                power: 10, 
                buff: "None",
                debuff: "None",
                description: "A basic magic spell.",
                effect: "None", 
                
            }, 
            {
                spellId: "BasicWater_1",
                spellName: "Waterspell", 
                element:"Water",  
                mp: 3,
                power: 10, 
                buff: "None",
                debuff: "None",
                description: "A basic Waterspell.",
                effect: "flood"
            }, 
            {
                spellId: "BasicFire_1",
                spellName: "Firespell", 
                element:"Fire", 
                mp: 5, 
                power: 15,
                buff: "None",
                debuff: "None",
                description: "A basic firespell", 
                effect: "burn"
            },


        ],
        armor : [
            {name: "Basic Glasses", category: "Glasses", def: 2, ability: "None", id:"face_1",  description: "basic wand"},
            {name: "School hat", category: "Hats", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {name: "School hat", category: "Hats", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {name: "School hat", category: "Hats", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {name: "School hat", category: "Hats", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {name: "School hat", category: "Hats", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {name: "School robe", category: "Robes",  def: 5, ability: "None", id:"body_1", description: "basic wand"}, 
            {name: "School boots", category: "Boots", def: 5, ability: "None", id:"feet_1", description: "basic wand"}
        ],
        weapons : [
            {name: "Starter Wand", category: "Wand", powerBoost: 0.2, ability: "None", id:"wand_1"},
        ],
        potions : [
            {name: "Basic Health Potion", category: "Hp Restore", restorePts: 10 , bonusEffect: "None", id:"healthPot_1"},
            {name: "Basic Magic Potion", category: "Magic Restore", restorePts: 10, bonusEffect: "None", id:"MagicPot_1"}
        ]
    };

/**********************
 PLAYER CONTEXT OBJECT
***********************/

    const playerCtx: playerContextType = {
        playerName,
        stats: contextStats,
        monsterLog,
        inventory,
        inventoryTest,
        equipedItems,
        isInventoryOpen,
        openInventory,
        openMonsterLog,
        isMonsterLogOpen,
        //addNewQuest,
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

