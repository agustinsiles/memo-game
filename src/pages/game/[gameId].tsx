import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { MemoCard } from "@/models/MemoCard";
import MemoCardItem from "@/components/MemoCardItem/memo-card-item.component";

export default function GameItem() {
  const router = useRouter();
  const { gameId } = router.query;
  const game = useSelector((state: RootState) =>
    state.games.games.find((game) => game.id === Number(gameId))
  );

  return (
    <div>
      {game?.cards.map((card: MemoCard) => {
        return <MemoCardItem key={card.id} />;
      })}
    </div>
  );
}
