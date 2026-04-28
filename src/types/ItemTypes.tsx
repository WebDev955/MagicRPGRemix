//Type Definitions
import type { SpellType } from "./SpellTypes"
import type { ElementType } from "./ElementTypes"
import type { LootDropType } from "./EnemyTypes"

export type itemListType = {
    armor: armorType[],
    weapons: weaponType[],
    spells: SpellType[],
    potions: potionType[],
    materials: materialType[],
    lootDrops: LootDropType[]
}


export type armorType = {
    id: string,
    name: string,
    category: string,
    description: string
    def: number, 
    ability?: string
}

export type weaponType = {
    id: string,
    name: string,
    description: string
    category: string, 
    powerBoost: number, 
    ability?: string,
}

export type potionType = {
    id: string, 
    name: string,
    category: string,
    restorePts: number,
    bonusEffect?: string
}

export type materialType = {
    id: string,
    name: string,
    description: string,
    element?: ElementType
}

