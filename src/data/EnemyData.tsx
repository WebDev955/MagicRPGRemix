import type { EnemyType } from "../types/EnemyTypes"
import { arcaneElement } from "../types/ElementTypes"

import slimeImg from "../assets/Slime.png"


export const EnemyList:EnemyType[] = [
	{
		id: "enemy_1",
		name: "Slime",
		img: slimeImg,
		description: "A weak slimy blob without much fight in it.",
		level: 2,
		spawnLoc: ["Castle","Forest"],
		lootDrops: [
			{
				id: "EnemyLoot_Slime_1",
				name: "Slime Goo",
				description: "An elementless goopy substance. Under the right elements, its chemistry could be reforgedinto something more useful."
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
			name: "Slime Splash",
			id: "attack_slime_1",
			element: arcaneElement,
			power: 3,
			mp: 1,
			description: "A splash of slime"
		}],
		recovery: [],			
	},
]

export const enemy:EnemyType = {
	id: "enemy_1",
	name: "Slime",
	img: slimeImg,
	description: "A weak slimy blob without much fight in it.",
	level: 2,
	spawnLoc: ["Castle","Forest"],
	lootDrops: [
		{
			id: "EnemyLoot_Slime_1",
			name: "Slime Goo",
			description: "An elementless goopy substance. Under the right elements, its chemistry could be reforgedinto something more useful."
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
		name: "Slime Splash",
		id: "attack_slime_1",
		element: arcaneElement,
		power: 3,
		mp: 1,
		description: "A splash of slime"
	}],
	recovery: [],			
}

