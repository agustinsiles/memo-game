import { MemoCard } from "@/models/MemoCard";

export function shuffleCards(cards: MemoCard[]) {
  return [...cards, ...cards]
    .sort((a, b) => 0.5 - Math.random())
    .map((card) => ({
      ...card,
      id: Math.random(),
    }));
}
