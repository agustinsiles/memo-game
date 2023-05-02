import GameList from "@/components/GameList/game-list.component";
import NewGameSelection from "@/components/NewGameSelection/new-game-selection.component";

export default function Home() {
  return (
    <div>
      <NewGameSelection />
      <GameList />
    </div>
  );
}
