type MapCell = {
    gridCord: string,
    gridType: string,
    mapType: string,
    passable: boolean, 
    eventType: string | null, 
    sceneId: string,
    bgImg: string,
    npcId: string | null,
    enemyId: string | null,
    villageId: string | null,
};
 
type mapArrayType = MapCell[][]
 
export const castleMapArray: mapArrayType = [
  // Row 0
  [
    { gridCord: "0,0", gridType: "Tree",   mapType: "castle", passable: false, eventType: "npc",    sceneId: "Tutorial_00", bgImg: "", npcId: "NPC_001", enemyId: null,      villageId: null },
    { gridCord: "0,1", gridType: "Tree",   mapType: "castle", passable: false, eventType: "battle", sceneId: "",            bgImg: "", npcId: null,      enemyId: "enemy_1", villageId: null },
    { gridCord: "0,2", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null,      villageId: null },
    { gridCord: "0,3", gridType: "Tree",   mapType: "castle", passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null,      villageId: null },
    { gridCord: "0,4", gridType: "Tree",   mapType: "castle", passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null,      villageId: null },
    { gridCord: "0,5", gridType: "Tree",   mapType: "castle", passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null,      villageId: null },
    { gridCord: "0,6", gridType: "Tree",   mapType: "castle", passable: false, eventType: null,     sceneId: "",            bgImg: "", npcId: null,      enemyId: null,      villageId: null },
  ],
  // Row 1
  [
    { gridCord: "1,0", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,1", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,2", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,3", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,4", gridType: "Battle", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,5", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,6", gridType: "Chest",  mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 2
  [
    { gridCord: "2,0", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,1", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,2", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,3", gridType: "Battle", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,4", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,5", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,6", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 3
  [
    { gridCord: "3,0", gridType: "Path", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,1", gridType: "Path", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,2", gridType: "Path", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,3", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,4", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,5", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,6", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 4
  [
    { gridCord: "4,0", gridType: "Path",    mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,1", gridType: "Chest",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,2", gridType: "Path",    mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,3", gridType: "Lake",    mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,4", gridType: "Village", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,5", gridType: "Tree",    mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,6", gridType: "Tree",    mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 5
  [
    { gridCord: "5,0", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,1", gridType: "Chest",  mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,2", gridType: "Battle", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,3", gridType: "Lake",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,4", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,5", gridType: "Chest",  mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,6", gridType: "Battle", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 6
  [
    { gridCord: "6,0", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,1", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,2", gridType: "Battle", mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,3", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,4", gridType: "Path",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,5", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,6", gridType: "Tree",   mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 7
  [
    { gridCord: "7,0", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,1", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,2", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,3", gridType: "Door", mapType: "forest", passable: true, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,4", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,5", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,6", gridType: "Tree", mapType: "castle", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
]
 
export const forestMapArray: mapArrayType = [
  // Row 0
  [
    { gridCord: "0,0", gridType: "Tree",   mapType: "forest", passable: false, eventType: "battle", sceneId: " ", bgImg: "", npcId: " ",  enemyId: "enemy_1", villageId: null },
    { gridCord: "0,1", gridType: "Tree",   mapType: "castle", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
    { gridCord: "0,2", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
    { gridCord: "0,3", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
    { gridCord: "0,4", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
    { gridCord: "0,5", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
    { gridCord: "0,6", gridType: "Tree",   mapType: "forest", passable: false, eventType: null,     sceneId: "",  bgImg: "", npcId: null, enemyId: null,      villageId: null },
  ],
  // Row 1
  [
    { gridCord: "1,0", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,1", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,2", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,3", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,4", gridType: "Battle", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,5", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "1,6", gridType: "Chest",  mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 2
  [
    { gridCord: "2,0", gridType: "Building",   mapType: "castle", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,1", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,2", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,3", gridType: "Battle", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,4", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,5", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "2,6", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 3
  [
    { gridCord: "3,0", gridType: "Path", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,1", gridType: "Path", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,2", gridType: "Path", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,3", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,4", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,5", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "3,6", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 4
  [
    { gridCord: "4,0", gridType: "Path",    mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,1", gridType: "Chest",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,2", gridType: "Path",    mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,3", gridType: "Lake",    mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,4", gridType: "Village", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,5", gridType: "Tree",    mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "4,6", gridType: "Tree",    mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 5
  [
    { gridCord: "5,0", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,1", gridType: "Chest",  mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,2", gridType: "Battle", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,3", gridType: "Lake",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,4", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,5", gridType: "Chest",  mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "5,6", gridType: "Battle", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 6
  [
    { gridCord: "6,0", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,1", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,2", gridType: "Battle", mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,3", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,4", gridType: "Path",   mapType: "forest", passable: true,  eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,5", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "6,6", gridType: "Tree",   mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
  // Row 7
  [
    { gridCord: "7,0", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,1", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,2", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,3", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,4", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,5", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
    { gridCord: "7,6", gridType: "Tree", mapType: "forest", passable: false, eventType: null, sceneId: "", bgImg: "", npcId: null, enemyId: null, villageId: null },
  ],
]
 