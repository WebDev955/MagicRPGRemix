export type RewardType = {
 id: string,
 name: string,
};

export type ObjectiveType = {
 id: string,
 name: string,
 description: string,
 isObjComplete: boolean,
 rewards: RewardType[]
};

export type QuestType = {
 id: string,
 name: string,
 description: string
 npcGiver: string,
 objectives: ObjectiveType[],
 rewards: RewardType[],
 isQuestComplete: boolean
};


// Quests //
export const QuestList:QuestType[] = [
  {
    id: "quest_000",
    name: "Battle Tutorial",
    description: "Explore the castle. Find your first battle to learn.",npcGiver: "WiseWizard",
    objectives: [{
      id: "quest_000_obj_01",
      name: "Find the Slime",
      description: "There is a Slime somewhere in the castle to battle.",
      isObjComplete: false,
      rewards: []
  }],
    rewards: [{
      id: "quest_000_reward",
      name: "Forest Map"
  }],
    isQuestComplete: false
}]



