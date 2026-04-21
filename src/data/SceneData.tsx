import castleWall from "../assets/CastleWall.jpg"


type sceneType = {
  theme: string,
  sceneId: string,
  sceneType: string | string | string,
  bgImg: string,
};


export const ScenesList:sceneType[] = [
 {
    theme: "tutorial",
    sceneId: "Tutorial_00",
    sceneType: "npc",
    bgImg: castleWall,
 },
 {
  theme: "Battle",
   sceneId: "NormalBattle",
   sceneType: "battle",
   bgImg: "imgUrl"
 }
]