import { Game } from "@/models/Game";

export default function Score({ game }: { game: Game }) {
  return <span>Score: {game.score}</span>;
}
