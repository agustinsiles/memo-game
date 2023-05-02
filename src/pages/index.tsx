import { useSelector, useDispatch } from "react-redux";
import { startNewGame } from "@/store/games/gamesSlice";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";
import { Game } from "@/models/Game";
import Button from "@/components/Button/button.component";
import { GameCategories } from "@/utils/enums";
import { useState } from "react";

const categories = Object.keys(GameCategories);

export default function Home() {
  const gameList = useSelector((state: RootState) => state.games.games);
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
    <div>
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
      {gameList?.length > 0 && (
        <ul>
          {gameList.map((game: Game) => (
            <li key={game.id}>{game.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
