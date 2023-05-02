import { useSelector, useDispatch } from "react-redux";
import { startNewGame } from "@/store/games/gamesSlice";
import { RootState } from "@/store/store";
import { Game } from "@/models/Game";
import Button from "@/components/Button/button.component";

export default function Home() {
  const gameList = useSelector((state: RootState) => state.games.games);
  const dispatch = useDispatch();

  const handleNewGameClick = () => {
    dispatch(startNewGame());
  };

  return (
    <div>
      <Button onClick={handleNewGameClick}>New game</Button>
      <ul>
        {gameList.map((game: Game) => (
          <li key={game.id}>{game.id}</li>
        ))}
      </ul>
    </div>
  );
}
