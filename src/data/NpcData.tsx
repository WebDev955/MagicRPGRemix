//IMPORT
import WizardImg from "../assets/WizardEditNoBG.png"
import portrait from "../assets/WizardPortrait.png"

type dialogueOptions = {
 defaultText: string 
 loreText: string,
 questOfferText: string,
 questAcceptedText: string,
 questCompleteText: string, 
}

type Position = {
  x: number;
  y: number;
};

type NPC = {
  id: string;
  questId: string;
  name: string;
  sprite: string,
  portrait: string,
  type: "villager" | "merchant" | "enemy";
  position: Position;

  dialogue?: dialogueOptions,
  interactionType?: "talk" | "shop" | "battle";
  movementType?: "static" | "random";
  hasBeenSpokenTo?: boolean;

};

export const NpcList:NPC[] = [
	{
		id: "NPC_001",
		name: "Wise Wizard",
		sprite: WizardImg,
    portrait: portrait,
		type: "villager",
		questId: "quest_000",
		position: {x: 10, y: 3},
		dialogue: {
            defaultText: "Hello there! Welcome to the Magic School! To get started, I asked that accept me question!",
            loreText: "This is lore text about the game.",
            questOfferText: "I offer you a quest. Please take this map of the school and explore it. A Slime is moving",
            questAcceptedText: "Thanks for accepting!",
            questCompleteText: "You did it! You defeated the slime. I present you with the Forest Map. Head to the forest and find the forest village."
	    },
    movementType: "static",
		interactionType: "talk",
	}
]
