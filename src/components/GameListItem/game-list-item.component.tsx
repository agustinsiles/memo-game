import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";
import Button, { ButtonSizes } from "../Button/button.component";
import Score from "../Score/score.component";
import { resumeGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function GameListItem({ game }: { game: Game }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleResumeGameClick = () => {
    dispatch(resumeGame({ gameId: game.id }));
    router.push(`/game/${game.id}`);
  };

  return (
    <li className="my-8 bg-white border-primary p-4 h-20 flex items-center justify-between">
      <div>
        Game #{game.id}{" "}
        {game.hasHighestScore && (
          <span className="uppercase text-primary font-bold">
            Highest score!
          </span>
        )}
      </div>
      <div>
        {game.status === GameStatus.IN_PROGRESS ? (
          <Button size={ButtonSizes.SM} onClick={handleResumeGameClick}>
            Resume
          </Button>
        ) : (
          <Score score={game.score} />
        )}
      </div>
    </li>
  );
}
