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
