import { arcaneElement, type ElementType} from "./ElementTypes"
import type { SpellType } from "./SpellTypes"

import slimeImg from "../../src/assets/Slime.png"

export type LootDropType = {
    id: string,
    name: string,
    element?: ElementType,
    description: string
}

type StatsType = {
    hp: number,
    mp: number,
    def: number,
    speed: number,
    buffs: string[],
    debuffs: string[]
}

export type RecoveryType = {
    id: string,
    name: string,
    restorePts: number,
    type: string,
    bonusEffect?: string
}

export type EnemyType = {
    id: string,
    name: string, 
    img: string,
    description: string,
    level: number,
    spawnLoc: string[],
    lootDrops: LootDropType[],
    element: ElementType,
    stats: StatsType,
    spells: SpellType[],	
    recovery: RecoveryType[],
}

export const EnemyList:EnemyType[] = [
    {
        id: "enemy_1",
        name: "Slime",
        img: slimeImg,
        description: "A weak slimy blob without much fight in it.",
        level: 2,
        spawnLoc: ["Castle","Forest"],
        lootDrops:[ 
            {
                id: "EnemyLoot_Slime_1",
                name: "Slime Goo",
                element: arcaneElement,
                description: "A goopy substance. Under the right elements, its raw arcane magic could be reforged into something more useful."
            }
        ],
        element: arcaneElement,
        stats: {
            hp: 5,
            mp: 10,
            def: 0,
            speed: 2,
            buffs: [],
            debuffs: [],
            },
        spells: [{
            id: "attack_slime_1",
            name: "Slime Splash",
            element: arcaneElement,
            power: 3,
            mp: 1,
            description: "A splash of slime"
        }],
        recovery: [],			
    },
]
