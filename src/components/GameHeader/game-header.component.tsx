import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";
import Score from "../Score/score.component";
import RetriesCounter from "../RetriesCounter/retries-counter.component";
import Title from "../Title/title.component";
import Button, { ButtonSizes } from "../Button/button.component";
import { useRouter } from "next/router";

export default function GameHeader({ game }: { game: Game }) {
  const { id, status, score } = game;
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className="container mx-auto my-4 px-4 flex justify-between">
      <Button onClick={handleBackClick} size={ButtonSizes.SM}>
        Back to game list
      </Button>
      {status === GameStatus.OVER && (
        <div className="text-success">
          <div>You won!</div>
          <p>
            <Score score={score} />
          </p>
        </div>
      )}
      <div className="text-right">
        <Title>Game #{id}</Title>
        <RetriesCounter gameId={id} />
      </div>
    </header>
  );
}
