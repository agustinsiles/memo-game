import { MemoCard } from "@/models/MemoCard";
import { revealCard } from "@/store/games/gamesSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import style from "./MemoCardItem.module.css";

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
    <div
      className={`border-4 border-white rounded-md text-center cursor-pointer ${style.card}`}
    >
      <div
        className={`${isCardVisible ? style.flipped : ""} text-center m-auto ${
          style.cardWrapper
        }`}
      >
        <Image
          alt="Memo test"
          src={card.image}
          width={350}
          height={350}
          className={`${style.front} ${style.image}`}
        />

        <div className="relative">
          <Image
            src="/images/card-cover.jpeg"
            alt="Flip card"
            onClick={handleCardClick}
            className={`${style.back} ${style.image}`}
            width={350}
            height={350}
          />
          {!isCardVisible && (
            <span className="absolute top-1/2 text-white font-bold text-lg">
              {position}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
