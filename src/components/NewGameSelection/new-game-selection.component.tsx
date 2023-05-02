import { useDispatch } from "react-redux";
import { startNewGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import Button from "@/components/Button/button.component";
import { GameCategories } from "@/utils/enums";
import { useState } from "react";

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
    <>
      <Button onClick={handleShowCategoriesClick}>New game</Button>
      {showGameCategories && (
        <>
          {categories.map((category) => (
            <Button
              onClick={() => handleNewGameClick(category as GameCategories)}
              key={category}
            >
              {category}
            </Button>
          ))}
        </>
      )}
    </>
  );
}
