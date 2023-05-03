import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { Game } from "@/models/Game";
import { resumeGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GameStatus } from "@/utils/enums";
import Button, { ButtonSizes } from "../Button/button.component";
import Score from "../Score/score.component";

export default function GameList() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.games);
  // We need to use state because of React Hydratation and the usage of localStorage
  const [gameList, setGameList] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    setGameList(games);
  }, [games]);

  const handleResumeGameClick = (gameId: number) => {
    dispatch(resumeGame({ gameId }));
    router.push(`/game/${gameId}`);
  };

  return gameList.length > 0 ? (
    <ul>
      {gameList.map((game: Game) => (
        <li key={game.id} className="mt-8">
          Game #{game.id} -{" "}
          {game.status === GameStatus.IN_PROGRESS ? (
            <Button
              size={ButtonSizes.SM}
              onClick={() => handleResumeGameClick(game.id)}
            >
              Resume
            </Button>
          ) : (
            <>
              <span>WON!</span> <Score score={game.score} />
            </>
          )}
        </li>
      ))}
    </ul>
  ) : null;
}
