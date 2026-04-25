//Type Definitions
type armorType = {
    armorId: string,
    armorName: string,
    armorCategory: string,
    description: string
    def: number, 
    ability?: string
}

type weaponType = {
    weaponId: string,
    weaponName: string,
    description: string
    type: string, 
    powerBoost: number, 
    ability?: string,
}

type potionType = {
    potionId: string, 
    type: string,
    restorePts: number,
    bonusEffect?: string
}

type spellType = {
    spellId: string, 
    spellName: string,
    element: string,
    mp: number,
    power: number, 
    buff?: string,
    debuff?: string,
    effect?: string,
    description: string
}

type materialType = {
    materialId: string,
    materialName: string,
    description: string,
    element?: string
}


type enemyLootType = {
    enemyLootId: string,
    enemyLootName: string,
    description: string,
    element?: string 
}

type itemListType = {
    armor: armorType[],
    weapon: weaponType[],
    spell: spellType[],
    potion: potionType[],
    matrial: materialType[],
    enemyLoot: enemyLootType[],
}

export const itemList:itemListType = {
    armor: [
        {
            armorId: "face_001",
            armorName: "Basic Glasses",
            armorCategory: "Glasses",
            description: "Well worn glasses",
            def: 2
        },
        {
            armorId: "head_001",
            armorName: "School Hat",
            armorCategory: "Hat",
            description: "A common wizard cap.",
            def: 2
        },
        {
            armorId: "body_001",
            armorName: "School Robe",
            armorCategory: "Robe",
            description: "A common wizard robe with the schoo's ensignia.",
            def: 2
        },
        {
            armorId: "feet_001",
            armorName: "Common Boots",
            armorCategory: "Feet",
            description: "Sturdy, warm boots.",
            def: 2
        }
    ],
    weapon : [ 
        {
            weaponId: "wand_001",
            weaponName: "Starter Wand",
            description: "A common wand for all novice wizards.",
            type: "wand", 
            powerBoost: 0.2, 
        }
    ],  
    potion : [ 
        {
            potionId: "potion_001" , 
            type: "health restore",
            restorePts: 10,      
        }
    ],
    spell : [ 
        {
            spellId: "spell_water_01", 
            spellName: "Water Splash",
            element: "Water",
            mp: 3,
            power: 10, 
            description: "A basic water spell."   
        },
        {
            spellId: "spell_fire_01", 
            spellName: "Flames",
            element: "Fire",
            mp: 5,
            power: 15, 
            description: "A basic fire spell.",
            effect: "Burn"   
        },
    ],  
    enemyLoot: [
        {
            enemyLootId: "loot_001_slime_01",
            enemyLootName: "Slime Goo",
            description: "An elementless goopy substance. Mixed with the right elements, its chemistry could be reforged into something more useful",
        }
    ],
    matrial:[
        {
            materialId: "materail_001",
            materialName: "Fresh Lake Water",
            description: "Pure clean water from a local lake. It could be infused with a Mage Stone to create a spell or apply more uses to an already created spell.",
            element: "Water",
        }
    ]
}   


    


    


