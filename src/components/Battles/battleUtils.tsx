//IMPORTS - CONTEXT
import type { PlayerContextType} from "../../data/PlayerData"
//IMPORTS - TYPES
import type { EnemyType, LootDropType } from "../../types/EnemyTypes"
import type { ElementType } from "../../types/ElementTypes"
import type { SpellType } from "../../types/SpellTypes"
import type { potionType } from "../../types/ItemTypes"
import type { RecoveryType } from "../../types/EnemyTypes"

//Create battler types with imported TYPES
export type battlerType = {
    name: string,
    element: ElementType | undefined,
    stats: {
        hp: number,
        def: number,
        mp: number,
        speed: number,
        buffs: string[],
        debuffs: string[] 
    },
    spells: SpellType[],
    potions: potionType[] | RecoveryType[]
    lootDrops: LootDropType[] | null
}

//Function - pull in data for battlers, playerCtx and enemy data 
export const createBattler = (player:PlayerContextType, enemy:EnemyType) => {
    const btlrPlayer = {
        name: player.playerName,
        element: player.stats.channeledElement,
        stats: {...player.stats},
        spells: [...player.bagTest.spells],
        potions: [...player.bagTest.potions],
        lootDrops: null
    };
    const btlrEnemy = {
        name: enemy.name,
        element: enemy.element,
        stats: {...enemy.stats},
        spells: [...enemy.spells],
        potions:[...enemy.recovery],
        lootDrops: [...enemy.lootDrops]
    }
        return { player: btlrPlayer, enemy: btlrEnemy}
    }

//Determine spell -> calcuate damege for spell -> cast on target
export const castSpell = (caster: battlerType,  spellId: string) => {
    const spell = caster.spells.find(s => s.id === spellId);
    if(!spell) return
    calculateDamage(spell)
}

export const calculateDamage = (spell:SpellType) => {
    return spell.power
   {/*  COMARING ELEMENTS FOR DAMAGE
        Psudeo Code for now

        if (spell.element.typeAdvantage > target.element.typeDisadvantage){
            spell.damage x 1.5 -= target.hp
            alert(`{target} took Xpts damage`)

        } else if { (spell.element < target.element){
            spell.damage x 0.5 -= target.hp
            alert(`{target} took Xpts damage`)
        }
        } else if { (spell.element = target.element){
            spell.damage -= target.hp
            alert(`{target} took Xpts damage`)
        }
        }
    */}
}
//Determine if battle is over based on HP conditions
export const determineBattleOver = (caster:battlerType, target:battlerType) => {
    if (caster.stats.hp <= 0){
        return true
    }

    if (target.stats.hp <= 0){
        return true
    }
    else {
        return false
    }
}