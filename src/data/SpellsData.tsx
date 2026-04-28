import type { SpellType } from "../types/SpellTypes";
import { arcaneElement,aquaElement, pyroElement } from "../types/ElementTypes";

export const basicCast:SpellType = {   
    id: "BasicCast_1",
    name: "Basic Cast", 
    element: arcaneElement,
    mp: 0, 
    power: 10, 
    buff: "None",
    debuff: "None",
    description: "A basic magic spell.",
    effect: "None",     
}

export const Splash:SpellType = {
    id: "BasicWater_1",
    name: "Splash", 
    element: aquaElement,  
    mp: 3,
    power: 10, 
    buff: "None",
    debuff: "None",
    description: "A basic Waterspell.",
    effect: "flood"
} 
    
export const Flames:SpellType = {
    id: "BasicFire_1",
    name: "Firespell", 
    element: pyroElement, 
    mp: 5, 
    power: 15,
    buff: "None",
    debuff: "None",
    description: "A basic firespell", 
    effect: "burn"
}

