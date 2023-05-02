import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { MemoCard } from "@/models/MemoCard";
import MemoCardItem from "@/components/MemoCardItem/memo-card-item.component";
import { endGame, guessedPaired, hideCards } from "@/store/games/gamesSlice";
import { useEffect } from "react";
import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";

export default function GameItem() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { gameId } = router.query;
  const game = useSelector((state: RootState) =>
    state.games.games.find((game) => game.id === Number(gameId))
  );
  const { flippedCards, guessedCards, cards, status } = game || ({} as Game);

  useEffect(() => {
    if (guessedCards && cards && guessedCards.length === cards.length) {
      dispatch(guessedPaired());
      dispatch(endGame());
    }
  }, [guessedCards, cards, dispatch]);

  useEffect(() => {
    if (!flippedCards) {
      return;
    }

    if (flippedCards.length === 2) {
      if (flippedCards[0].image === flippedCards[1].image) {
        dispatch(guessedPaired());
      } else {
        setTimeout(() => {
          dispatch(hideCards());
        }, 1500);
      }
    }
  }, [flippedCards, dispatch]);

  if (!game) {
    return <p>Loading saved game...</p>;
  }

  return (
    <>
      <h3>
        Game #{gameId} -{" "}
        {status === GameStatus.IN_PROGRESS ? "In progres..." : "WON!"}
      </h3>
      <div className="grid grid-cols-6">
        {game.cards.map((card: MemoCard, index: number) => {
          const position = index + 1;
          return <MemoCardItem card={card} position={position} key={card.id} />;
        })}
      </div>
    </>
  );
}
