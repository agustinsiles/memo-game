import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";
import Score from "../Score/score.component";
import RetriesCounter from "../RetriesCounter/retries-counter.component";

export default function GameHeader({ game }: { game: Game }) {
  const { id, status } = game;
  return (
    <header>
      <h3>
        Game #{id} -{" "}
        {status === GameStatus.IN_PROGRESS ? (
          "In progres..."
        ) : (
          <>
            WON!
            <Score game={game} />
          </>
        )}
      </h3>
      <RetriesCounter gameId={id} />
    </header>
  );
}
