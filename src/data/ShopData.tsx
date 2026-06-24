import type { itemListType } from "../types/ItemTypes";
import type { NPC } from "./NpcData";
import type { weaponType, potionType, materialType, armorType } from "../types/ItemTypes";
import type { SpellType } from "../types/SpellTypes";
import { NpcList} from "./NpcData"
import { itemList } from "./ItemData"
import { aquaElement } from "../types/ElementTypes";


type ShopItemType = armorType | weaponType | potionType | SpellType | materialType

export type Shop = {
    id: string;
    npcId: string;
    inventory: ShopItemType[];
}

export const ShopList:Shop[] = [
    {
        id: "ForestVillageShop_001",
        npcId: "NPC_002",
        inventory: [
            itemList.armor.find(armor => armor.id === "face_001"),
            itemList.weapons.find(category => category.category === "Wand"),
            itemList.spells.find(element => element.element === aquaElement),
            itemList.potions.find(potion => potion.category === "Health Restore"),
            itemList.materials.find(element => element.element === aquaElement)
        ].filter((item): item is ShopItemType => item !==  undefined)
  
    }
]