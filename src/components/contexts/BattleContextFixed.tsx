import { createContext, useState } from "react";
import type { ReactNode } from "react";

// IMPORT - Utils
import { createBattler } from "../Battles/battleUtils";

// IMPORT - TYPES
import type { battlerType } from "../Battles/battleUtils";
import type { playerContextType } from "./PlayerContext";
import type { enemy } from "../../data/EnemyData";

// -------------------------
// TYPES
// -------------------------
export type BattleState = {
  player: battlerType;
  enemy: battlerType;
  currentTurn: "player" | "enemy";
};

export type BattleContextType = {
  battle: boolean;
  battleState: BattleState;
  activeBattler: battlerType;

  startBattle: (player: playerContextType, enemy: enemy) => void;
  createBattler: (player: playerContextType, enemy: enemy) => {
    player: battlerType;
    enemy: battlerType;
  };
  determineTurn: (btlrPlayer: battlerType, btlrEnemy: battlerType) => "player" | "enemy";
};

// -------------------------
// CONTEXT
// -------------------------
export const BattleContext = createContext<BattleContextType>({
  battle: false,
  battleState: {
    player: {} as battlerType,
    enemy: {} as battlerType,
    currentTurn: "player",
  },
  activeBattler: {} as battlerType,
  startBattle: () => {},
  createBattler: () => ({ player: {} as battlerType, enemy: {} as battlerType }),
  determineTurn: () => "player",
});

// -------------------------
// PROVIDER
// -------------------------
type Props = {
  children: ReactNode;
};

const BattleContextProvider = ({ children }: Props) => {
  const [battle, setBattle] = useState(false);
  const [battleState, setBattleState] = useState<BattleState>({
    player: {} as battlerType,
    enemy: {} as battlerType,
    currentTurn: "player",
  });

  // Derived: who's the active battler based on currentTurn
  const activeBattler =
    battleState.currentTurn === "player" ? battleState.player : battleState.enemy;

  // Determine who goes first
  const determineTurn = (p: battlerType, e: battlerType): "player" | "enemy" => {
    return p.stats.speed > e.stats.speed ? "player" : "enemy";
  };

  // Start a new battle
  const startBattle = (player: playerContextType, enemy: enemy) => {
    setBattle(true);

    const { player: btlrPlayer, enemy: btlrEnemy } = createBattler(player, enemy);

    const firstTurn = determineTurn(btlrPlayer, btlrEnemy);

    setBattleState({
      player: btlrPlayer,
      enemy: btlrEnemy,
      currentTurn: firstTurn,
    });
  };

  // Build context object
  const battleCtx: BattleContextType = {
    battle,
    battleState,
    activeBattler,
    startBattle,
    createBattler,
    determineTurn,
  };

  return <BattleContext.Provider value={battleCtx}>{children}</BattleContext.Provider>;
};

export default BattleContextProvider;