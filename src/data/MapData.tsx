
type MapCell = {
    gridCord: string,
    gridType: string,
    passable: boolean, 
    eventType: string | null, 
    sceneId: string,
    bgImg: string,
    npcId: string | null,
    enemyId: string | null,
    villageId: string | null,
};

type mapArrayType = MapCell[][]

const forestMapArray: mapArrayType = [
  // Row 0
  [
    { gridCord: "0,0", gridType: "Tree",   passable: false, eventType: "npc",    sceneId: "Tutorial_00", bgImg: "", npcId: "NPC_001", enemyId: null, villageId: null },
    { gridCord: "0,1", gridType: "Tree",   passable: false, eventType: "battle", sceneId: "",            bgImg: "", npcId: null,      enemyId: "enemy_1", villageId: null },
    { gridCord: "0,2", gridType: "Tree",   passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null, villageId: null },
    { gridCord: "0,3", gridType: "Tree",   passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null, villageId: null },
    { gridCord: "0,4", gridType: "Tree",   passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null, villageId: null },
    { gridCord: "0,5", gridType: "Tree",   passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null, villageId: null },
    { gridCord: "0,6", gridType: "Tree",   passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null, villageId: null },
  ],
  // Row 1
  [
    { gridCord: "1,0", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,1", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,2", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,3", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,4", gridType: "Battle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,5", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,6", gridType: "Chest",  passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 2
  [
    { gridCord: "2,0", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,1", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,2", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,3", gridType: "Battle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,4", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,5", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,6", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 3
  [
    { gridCord: "3,0", gridType: "Path", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,1", gridType: "Path", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,2", gridType: "Path", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,3", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,4", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,5", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,6", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 4
  [
    { gridCord: "4,0", gridType: "Path",    passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,1", gridType: "Chest",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,2", gridType: "Path",    passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,3", gridType: "Lake",    passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,4", gridType: "Village", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,5", gridType: "Tree",    passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,6", gridType: "Tree",    passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 5
  [
    { gridCord: "5,0", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,1", gridType: "Chest",  passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,2", gridType: "Battle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,3", gridType: "Lake",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,4", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,5", gridType: "Chest",  passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,6", gridType: "Battle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 6
  [
    { gridCord: "6,0", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,1", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,2", gridType: "Battle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,3", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,4", gridType: "Path",   passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,5", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,6", gridType: "Tree",   passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 7
  [
    { gridCord: "7,0", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,1", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,2", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,3", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,4", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,5", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,6", gridType: "Tree", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
]

export default forestMapArray

{/*
    const mapArray = [
        ["Tree", "Tree", "Tree", "Tree", "Path", "Tree", "Tree"],

        ["Tree", "Tree", "Tree", "Tree", "Battle", "Path", "Chest"],

        ["Path", "Path", "Path", "Battle", "Path", "Tree", "Tree"],

        ["Path", "Path", "Path", "Tree", "Tree", "Tree", "Tree"],

        ["Path", "Chest", "Path", "Lake", "Village", "Tree", "Tree"],

        ["Path", "Chest", "Battle", "Lake", "Path", "Chest", "Battle"],

        ["Tree", "Tree", "Battle", "Path", "Path", "Tree", "Tree"],

        ["Tree", "Tree", "Tree", "Tree", "Tree", "Tree", "Tree"]
    ]

    {type: "Tree", event: null, passable: false}
    {type: "Path" event: null, passable: true}
    {type: "Battle" event: "Battle", passable: true}
    {type: "Chest", event: "Get Item", passable: true}
    {type: "Lake", event: null, passable: false}
    {type: "Village", event:"Enter Village", passable: true}
    */}
