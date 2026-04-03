//IMPORTS - HOOK
import { createContext, useState, useContext, useCallback, useMemo } from "react";
import type {ReactNode} from "react"

//IMPORTS - CONEXT
import { AccountContext} from "./AccountContext";

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
    inventory: {
        gold: number,
        spells: {
            id: string,
            name: string,
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
            id: string, 
            name: string,
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
            type: string, 
            def: number, 
            ability: string,
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

    isInventoryOpen: boolean,
    openInventory: () => void,
    //closeInventory: () => void,
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

    isInventoryOpen: false,
    openInventory: () => {},
    //loseInventory: () => {},
    equipItem: () => {},
    unequipItem: () => {},

})

//Only in Provider is where you create functions and estbalish state
export function PlayerContextProvider({children}:Props){
    const acctCtx = useContext(AccountContext)
    const playerName = acctCtx.userAccount.playerName || "player"

    

/****************************************
    EQUIP - UNEQUIP ITEMS                         
***************************************/ 
    const [equipedItems, setEquipedItems] = useState<EquipableItem[]>([])
    const [isInventoryOpen, setIsInventoryOpen] = useState(false)

    const openInventory = () => {
        setIsInventoryOpen(!isInventoryOpen)
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
            {   id: "BasicCast_1",
                name: "Basic Cast", 
                element:"None", 
                mp: 0, 
                power: 10, 
                buff: "None",
                debuff: "None",
                description: "A basic magic spell.",
                effect: "None", 
                
            }, 
            {
                id: "BasicWater_1",
                name: "Waterspell", 
                element:"Water",  
                mp: 3,
                power: 10, 
                buff: "None",
                debuff: "None",
                description: "A basic Waterspell.",
                effect: "flood"
            }, 
            {
                id: "BasicFire_1",
                name: "Firespell", 
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
            {type: "Glasses", def: 2, ability: "None", id:"face_1",  description: "basic wand"},
            {type: "School hat", def: 5, ability: "None", id:"head_1", description: "basic wand"}, 
            {type: "School robe", def: 5, ability: "None", id:"body_1", description: "basic wand"}, 
            {type: "School boots", def: 5, ability: "None", id:"feet_1", description: "basic wand"}
        ],
        weapons : [
            {type: "Starter Wand", powerBoost: 0.2, ability: "None", id:"wand_1"},
        ],
        potions : [
            {type: "Basic Health Potion", restorePts: 10 , bonusEffect: "None", id:"healthPot_1"},
            {type: "Basic Magic Potion", restorePts: 10, bonusEffect: "None", id:"MagicPot_1"}
        ]
    };

/**********************
 PLAYER CONTEXT OBJECT
***********************/

    const playerCtx: playerContextType = {
        playerName,
        stats: contextStats,
        inventory,
        inventoryTest,
        equipedItems,
        isInventoryOpen,
        openInventory,
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