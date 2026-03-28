
const battleUtils = () => {


{/* type battler = {
    name: string,
    element: string,
    stats: {
        hp: number,
        df: number,
        mp: number,
    },
    spells: [string],
}

    //Function - pull in data for battlers, playerCtx and enemy data 
    const createBattlers = (player:Object, enemy:Object) => {
        const btlrPlayer = {
            name: player.name,
            element: player.element,
            stats: {...player.stats},
            spells: [...player.inventory.spells],
            calculateDamage(),
        },
        const btlrEnemy = {
            name: enemy.name,
            element: enemy.element,
            stats: {...enemy.stats},
            spells: [...enemy.inventory.spells],
            calculateDamage();
        }
        
        return btlrPlayer, btlrEnemy
    }
}

const castSpell = (caster:Object, target:Object, spell:string) => {
    calculateDamage(spell, target)
    
    //apply buffs and debuffs
    target.debuff = spell?.debuff;
    caster.buff = spell?.buff;
    caster.element = spell?.element;
}

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
}

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

}

export default battleUtils