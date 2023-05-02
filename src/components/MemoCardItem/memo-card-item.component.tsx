import { MemoCard } from "@/models/MemoCard";
import { revealCard } from "@/store/games/gamesSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

type IProps = {
  card: MemoCard;
  position: number;
};

export default function MemoCardItem({ card, position }: IProps) {
  const dispatch = useDispatch();
  const activeGame = useSelector((state: RootState) => state.games.activeGame);
  const { flippedCards, guessedCards } = useSelector(
    (state: RootState) =>
      state.games.games.find((game) => game.id === activeGame)!
  )!;

  const isCardVisible =
    flippedCards.some(({ id }) => id === card.id) ||
    guessedCards.some(({ id }) => id === card.id);

  const handleCardClick = () => {
    dispatch(revealCard(card));
  };

  return (
    <div className="w-full h-full">
      {isCardVisible ? (
        <Image
          className="w-full"
          alt="Memo test"
          src={card.image}
          width={500}
          height={500}
        />
      ) : (
        <div onClick={handleCardClick} className="text-testRed">
          {position}
        </div>
      )}
    </div>
  );
}
