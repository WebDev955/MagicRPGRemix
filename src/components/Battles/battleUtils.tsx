//import Context

import type { playerContextType } from "../contexts/PlayerContext"
import type { enemy } from "../../data/Enemies"



export type spell = { 
    id: string, 
    name: string,
    element: string,
    mp: number,
    power: number, 
    buff: string,
    debuff: string,
    effect: string,
    description: string 
}


export type battlerType = {
    name: string,
    element: string | undefined,
    stats: {
        hp: number,
        def: number,
        mp: number,
        speed: number,
        buffs: string[],
        debuffs: string[] 
    },
    spells: spell[],
    potions: {
        id: string, 
        type: string,
        restorePts: number,
        bonusEffect: string
    }[]
}

    //Function - pull in data for battlers, playerCtx and enemy data 
export const createBattler = (player:playerContextType, enemy:enemy) => {
        const btlrPlayer = {
            name: player.playerName,
            element: player.stats.channeledElement,
            stats: {...player.stats},
            spells: [...player.inventory.spells],
            potions: [...player.inventory.potions]
  
        };
        const btlrEnemy = {
            name: enemy.monsterName,
            element: enemy.element,
            stats: {...enemy.stats},
            spells: [...enemy.spells],
            potions:[...enemy.recovery]
        }
        
        return { player: btlrPlayer, enemy: btlrEnemy}
    }


export const castSpell = (caster: battlerType, target: battlerType, spellId: string) => {
    const spell = caster.spells.find(s => s.id === spellId);
    
    if(!spell) return

    //calculateDamage(spell, target)
    
    //apply buffs and debuffs
    target.stats.debuffs.push(spell?.debuff) 
    caster.stats.buffs.push(spell?.buff) 
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

