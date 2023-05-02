import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";
import Score from "../Score/score.component";
import RetriesCounter from "../RetriesCounter/retries-counter.component";

export default function GameHeader({ game }: { game: Game }) {
  const { id, status, score } = game;
  return (
    <header>
      <h3>
        Game #{id} -{" "}
        {status === GameStatus.IN_PROGRESS ? (
          "In progres..."
        ) : (
          <>
            WON!
            <Score score={score} />
          </>
        )}
      </h3>
      <RetriesCounter gameId={id} />
    </header>
  );
}
