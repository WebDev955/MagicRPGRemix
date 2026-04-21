type Reward = {
 id: string,
 rewardName: string,
};

type Objective = {
 id: string,
 objectiveName: string,
 description: string,
 isObjComplete: boolean,
 rewards: Reward[]
};

export type Quest = {
 questId: string,
 questName: string,
 description: string
 npcGiver: string,
 objectives: Objective[],
 rewards: Reward[],
 isQuestComplete: boolean
};


// Quests //
export const QuestList:Quest[] = [
  {
    questId: "quest_000",
    questName: "Battle Tutorial",
    description: "Explore the castle. Find your first battle to learn.",npcGiver: "WiseWizard",
    objectives: [{
      id: "quest_000_obj_01",
      objectiveName: "Find the Slime",
      description: "There is a Slime somewhere in the castle to battle.",
      isObjComplete: false,
      rewards: []
  }],
    rewards: [{
      id: "quest_000_reward",
      rewardName: "Forest Map"
  }],
    isQuestComplete: false
}]



