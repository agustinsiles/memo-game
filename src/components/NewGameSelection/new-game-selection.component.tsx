import { useDispatch, useSelector } from "react-redux";
import { startNewGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import Button, { ButtonSizes } from "@/components/Button/button.component";
import { ColorVariants, GameCategories } from "@/utils/enums";
import { useState } from "react";
import Title from "../Title/title.component";
import { RootState } from "@/store/store";

const categories = Object.keys(GameCategories);

export default function NewGameSelection() {
  const dispatch = useDispatch();
  const lastSavedGame = useSelector(
    (state: RootState) => state.games.games[state.games.games.length - 1]
  );
  const router = useRouter();
  const [showGameCategories, setShowGameCategories] = useState(false);

  const handleShowCategoriesClick = () => {
    setShowGameCategories(true);
  };

  const handleNewGameClick = (category: GameCategories) => {
    const gameId = lastSavedGame ? lastSavedGame.id + 1 : 1;
    dispatch(startNewGame({ gameId, category }));
    router.push(`/game/${gameId}`);
  };

  return (
    <div className="m-10 text-center">
      <Title>Memory Game</Title>
      {showGameCategories ? (
        <div>
          <p className="text-white my-2">Pick a category:</p>
          {categories.map((category) => (
            <Button
              variant={ColorVariants.PRIMARY}
              onClick={() => handleNewGameClick(category as GameCategories)}
              key={category}
              classNames="m-2"
            >
              {category}
            </Button>
          ))}
        </div>
      ) : (
        <Button
          classNames="my-4"
          variant={ColorVariants.PRIMARY}
          size={ButtonSizes.LG}
          onClick={handleShowCategoriesClick}
        >
          New game
        </Button>
      )}
    </div>
  );
}
