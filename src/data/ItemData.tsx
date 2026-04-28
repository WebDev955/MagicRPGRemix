import { aquaElement, pyroElement } from "../types/ElementTypes"
import type { itemListType } from "../types/ItemTypes"



//TODO Import TYPES from --> 
export const itemList:itemListType = {
    armor: [
        {
            id: "face_001",
            name: "Basic Glasses",
            category: "Glasses",
            description: "Well worn glasses",
            def: 2
        },
        {
            id: "head_001",
            name: "School Hat",
            category: "Hat",
            description: "A common wizard cap.",
            def: 2
        },
        {
            id: "body_001",
            name: "School Robe",
            category: "Robe",
            description: "A common wizard robe with the schoo's ensignia.",
            def: 2
        },
        {
            id: "feet_001",
            name: "Common Boots",
            category: "Feet",
            description: "Sturdy, warm boots.",
            def: 2
        }
    ],
    weapons : [ 
        {
            id: "wand_001",
            name: "Starter Wand",
            description: "A common wand for all novice wizards.",
            category: "wand", 
            powerBoost: 0.2, 
        }
    ],  
    potions : [ 
        {
            id: "potion_001" , 
            name: "Basic Healing Potion",
            category: "Health Restore",
            restorePts: 10,      
        }
    ],
    spells : [ 
        {
            id: "spell_water_01", 
            name: "Water Splash",
            element: aquaElement,
            mp: 3,
            power: 10, 
            description: "A basic water spell."   
        },
        {
            id: "spell_fire_01", 
            name: "Flames",
            element: pyroElement,
            mp: 5,
            power: 15, 
            description: "A basic fire spell.",
            effect: "Burn"   
        },
    ],  
    lootDrops: [
        {
            id: "loot_001_slime_01",
            name: "Slime Goo",
            description: "An elementless goopy substance. Mixed with the right elements, its chemistry could be reforged into something more useful",
        }
    ],
    materials:[
        {
            id: "materail_001",
            name: "Fresh Lake Water",
            description: "Pure clean water from a local lake. It could be infused with a Mage Stone to create a spell or apply more uses to an already created spell.",
            element: aquaElement,
        }
    ]
}   


    


    


