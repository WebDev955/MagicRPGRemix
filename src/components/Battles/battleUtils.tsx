//import Context
import type { PlayerContextType} from "../../data/PlayerData"
import type { EnemyType, LootDropType } from "../../types/EnemyTypes"
import type { ElementType } from "../../types/ElementTypes"
import type { SpellType } from "../../types/SpellTypes"
import type { potionType } from "../../types/ItemTypes"
import type { RecoveryType } from "../../types/EnemyTypes"

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


export const castSpell = (caster: battlerType, target: battlerType, spellId: string) => {
    const spell = caster.spells.find(s => s.id === spellId);
    
    if(!spell) return

    //calculateDamage(spell, target)
    
    //apply buffs and debuffs
    if (spell.debuff) target.stats.debuffs.push(spell.debuff)
    if (spell.buff) caster.stats.buffs.push(spell.buff)
    caster.element = spell?.element;
    alert(`${target.name} took ${spell?.power}pts of damage!`)
    alert(`${caster.name} is now chanelling ${spell.element}!`)
}


{/*
const calculateDamage = (spell:Object, target:Object) => {
    if (spell.element > target.element){
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
/*}

const isBattleOver = (btlrPlayer:Object, btlrEnemy:Object) => {
    if (btlrPlayer.HP === 0){
        return btlrPlayer
    }
    if (btlrEnemy.HP === 0){
        //determineXp()
        //determineRewards() 
        return btlrEnemy
    }
    else { 
        (btlrPlayer.HP && btlrEnemy.HP > 0){
        return 
      }
    }  
 */}


//}

