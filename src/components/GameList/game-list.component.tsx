import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Game } from "@/models/Game";
import { useEffect, useState } from "react";
import GameListItem from "../GameListItem/game-list-item.component";

export default function GameList() {
  const games = useSelector((state: RootState) => state.games.games);
  // We need to use state because of React Hydratation and the usage of localStorage
  const [gameList, setGameList] = useState<Game[]>([]);

  useEffect(() => {
    setGameList(games);
  }, [games]);

  return (
    gameList.length > 0 && (
      <div className="container mx-auto text-center">
        <ul>
          {gameList.map((game: Game) => (
            <GameListItem key={game.id} game={game} />
          ))}
        </ul>
      </div>
    )
  );
}
