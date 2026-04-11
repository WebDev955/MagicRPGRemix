import slimeImg from "../assets/Slime.png"


type enemyListType = {
	monsterName: string, 
	id: string,
	img: string,
	description: string,
	level: number,
	spawnLoc: [string],
	lootDrops: {
		name: string,
		id: string,
		desc: string,
	},
	element: string,
	stats: {
		hp: number,
		mp: number,
		def: number,
		speed: number,
		buffs: [],
		debuffs: []
	},
	attacks: {
		attackName: string,
		id: string,
		element: string,
		power: number,
		mp: number,
		buffs: [],
		debuffs: [],
	}[],	
	recovery: {
		name: string,
		restorePts: number
	}[],
}[];
export type enemy = {
	monsterName: string, 
	id: string,
	img: string,
	description: string,
	level: number,
	spawnLoc: [string],
	lootDrops: {
		name: string,
		id: string,
		desc: string,
	},
	element: string,
	stats: {
		hp: number,
		mp: number,
		def: number,
		speed: number,
		buffs: string[],
		debuffs: string[]
	},
	spells: {
		name: string,
		id: string,
		element: string,
		power: number,
		mp: number,
		buff: string,
		debuff: string,
		effect: string,
        description: string
	}[],	
	recovery: {
		id: string,
		name: string,
		restorePts: number,
		type: string,
        bonusEffect: string
	}[],
}
export const enemyList:enemyListType = [
  {
    monsterName: "Slime",
	id: "enemy_1",
	img: slimeImg,
	description: "A weak slimy blob without much fight in it.",
	level: 2,
	spawnLoc: ["Forest"],
	lootDrops: {
		name: "Slime Goo",
		id: "EnemyLoot_Slime_1",
		desc: "An elementless goopy substance. Under the right elements, its chemistry could be reforged into something more useful."
	},
	element: "",
	stats: {
		hp: 5,
		mp: 10,
		def: 0,
		speed: 2,
		buffs: [],
		debuffs: [],
		},
	attacks: [{
		attackName: "Slime Splash",
		id: "attack_slime_1",
		element: "",
		power: 3,
		mp: 1,
		buffs: [],
		debuffs: [],
	}],
	recovery:[],			
  }
]

export const slime:enemy = {
    monsterName: "Slime",
	id: "enemy_1",
	img: slimeImg,
	description: "A weak slimy blob without much fight in it.",
	level: 2,
	spawnLoc: ["Forest"],
	lootDrops: {
	    name: "Slime Goo",
		id: "EnemyLoot_Slime_1",
		desc: "An elementless goopy substance. Under the right elements, its chemistry could be reforgedinto something more useful."
	},
	element: "",
	stats: {
		hp: 5,
		mp: 10,
		def: 0,
		speed: 2,
		buffs: [],
		debuffs: [],
		},
	spells: [{
		name: "Slime Splash",
		id: "attack_slime_1",
		element: "",
		power: 3,
		mp: 1,
		buff: "None",
		debuff: "None",
		effect: "None",
    	description: "A splash of slime"
	}],
	recovery: [],			
  }




