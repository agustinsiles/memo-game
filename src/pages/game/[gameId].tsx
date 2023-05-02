import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { endGame, guessedPaired, hideCards } from "@/store/games/gamesSlice";
import { useEffect } from "react";
import { Game } from "@/models/Game";
import GameHeader from "@/components/GameHeader/game-header.component";
import MemoCardList from "@/components/MemoCardList/memo-card-list.component";

export default function GameItem() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { gameId } = router.query;
  const game = useSelector((state: RootState) =>
    state.games.games.find((game) => game.id === Number(gameId))
  );
  const { flippedCards, guessedCards, cards } = game || ({} as Game);

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
      <GameHeader game={game} />
      <MemoCardList cards={cards} />
    </>
  );
}
