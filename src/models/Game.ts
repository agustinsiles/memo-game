import { GameStatus } from "@/utils/enums";
import { MemoCard } from "./MemoCard";

export type Game = {
  id: number;
  status: GameStatus;
  cards: MemoCard[];
  flippedCards: MemoCard[];
  guessedCards: MemoCard[];
  score: number;
  retries: number;
  hasHighestScore: boolean;
};
