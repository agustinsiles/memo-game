import { Game } from "@/models/Game";
import { MemoCard } from "@/models/MemoCard";

export function shuffleCards(cards: MemoCard[]) {
  return [...cards, ...cards]
    .sort(() => 0.5 - Math.random())
    .map((card) => ({
      ...card,
      id: Math.random(),
    }));
}

export function getScore(retries: number, numberOfPairs: number): number {
  return Number(((numberOfPairs / retries) * 100).toFixed(2));
}

export function getCurrentHighestScore(games: Game[]) {
  const highestScoreGame = games.find(({ hasHighestScore }) => hasHighestScore);
  return highestScoreGame === undefined ? 0 : highestScoreGame.score;
}
