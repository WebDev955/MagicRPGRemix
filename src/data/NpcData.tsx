//IMPORT
import WizardImg from "../assets/WizardEditNoBG.png"
import portrait from "../assets/WizardPortrait.png"

type dialogueOptions = {
 default: string 
 questOffer: string,
 questComplete: string, 
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

  questStarted?: boolean;
  questInProgress?: boolean;
  questComplete?: boolean
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
            default: "Hello there! Welcome to the Magic School! To get started, I asked that accept me question!",
            questOffer: "I offer you a quest. Please take this map of the school and explore it. A Slime is moving",
            questComplete: "You did it! You defeated the slime. I present you with the Forest Map. Head to the forest and find the forest village."
	    },
    movementType: "static",
		interactionType: "talk",
		hasBeenSpokenTo: false,
		questStarted: false,
		questInProgress: false,
    questComplete: false
	}
]
