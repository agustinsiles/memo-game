import { useDispatch } from "react-redux";
import { startNewGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import Button, {
  ButtonSizes,
  ButtonVariants,
} from "@/components/Button/button.component";
import { GameCategories } from "@/utils/enums";
import { useState } from "react";
import Title from "../Title/title.component";

const categories = Object.keys(GameCategories);

export default function NewGameSelection() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showGameCategories, setShowGameCategories] = useState(false);

  const handleShowCategoriesClick = () => {
    setShowGameCategories(true);
  };

  const handleNewGameClick = (category: GameCategories) => {
    const gameId = Math.floor(Math.random() * 100);
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
              variant={ButtonVariants.PRIMARY}
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
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LG}
          onClick={handleShowCategoriesClick}
        >
          New game
        </Button>
      )}
    </div>
  );
}
