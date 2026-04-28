import type { ElementType } from "../types/ElementTypes"

export type SpellType = {
    id: string, 
    name: string,
    element: ElementType,
    mp: number,
    power: number, 
    buff?: string,
    debuff?: string,
    effect?: string,
    description: string
}

