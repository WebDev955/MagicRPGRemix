import type { armorType, weaponType, potionType, materialType} from "../types/ItemTypes"
import type { SpellType } from "../types/SpellTypes"
import type { ElementType } from "../types/ElementTypes"
import type { QuestType } from "./QuestData" 

export type EquipableItem = {
    id: string
    name: string, 
    category: string
    def?: number
    powerBoost?: number
    ability?: string
}
export type QuestLogType = QuestType

export type MonsterLogType = {
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
}
export type BagType = {
    gold: number,
    spells: SpellType[],
    armor: armorType[],
    weapons: weaponType[],
    potions: potionType[]
    materials: materialType[],
}
export type BagTestType = {
    gold: number,
    spells: SpellType[],
    armor: armorType[],
    weapons: weaponType[],
    potions: potionType[]
    materials: materialType[],
}
export type StatsType = {
    hp: number,
    mp: number,
    def: number,
    speed: number,
    channeledElement: ElementType | undefined,
    buffs: string[],
    debuffs: string[],  
}

export type PlayerContextType = {
    playerName: string,
    equipedItems: EquipableItem[],
    monsterLog: MonsterLogType[],  
    questLog: QuestLogType[],
    bag: BagType,
    bagTest: BagTestType,
    stats: StatsType

    //Player related Functions//
    openInventory: () => void,
    isInventoryOpen: boolean,

    equipItem: (item: EquipableItem) => void;
    unequipItem: (item: EquipableItem) => void;

    openMonsterLog: () => void,
    isMonsterLogOpen: boolean,
    
    addNewQuest: (questId:string) => void;
    openQuestLog: () => void,
    isQuestLogOpen: boolean

}