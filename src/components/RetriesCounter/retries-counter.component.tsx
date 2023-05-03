import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function RetriesCounter({ gameId }: { gameId: number }) {
  const { retries } = useSelector((state: RootState) =>
    state.games.games.find((game) => game.id === Number(gameId))
  )!;

  return (
    <div className="italic text-white">
      {retries} move{retries !== 1 ? "s" : ""}
    </div>
  );
}
