import { Game } from "@/models/Game";
import { GameCategories, GameStatus } from "@/utils/enums";
import { shuffleCards } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import cards from "../../utils/cards.json";

type State = {
  games: Game[];
  activeGame?: number;
};
const initialState: State = {
  games: [],
  activeGame: undefined,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    startNewGame: (
      state,
      action: { payload: { gameId: number; category: GameCategories } }
    ) => {
      const { gameId, category } = action.payload;

      state.games.push({
        id: gameId,
        cards: shuffleCards(cards[category]),
        status: GameStatus.IN_PROGRESS,
        flippedCards: [],
        guessedCards: [],
        score: 0,
      });

      state.activeGame = gameId;
    },
    resumeGame: (state, action) => {
      const gameId = action.payload.gameId;
      state.activeGame = gameId;
    },
    endGame: (state) => {
      let currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;

      currentGame = {
        ...currentGame,
        status: GameStatus.OVER,
      };
    },
    quitGame: (state) => {
      state.activeGame = undefined;
    },
    revealCard: (state, action) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;

      const card = action.payload;
      if (currentGame.flippedCards.length < 2) {
        currentGame.flippedCards.push(card);
      }
    },
    hideCards: (state) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;
      currentGame.flippedCards = [];
    },
    guessedPaired: (state) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;
      currentGame.guessedCards.push(...currentGame.flippedCards);
      currentGame.flippedCards = [];
    },
  },
});

export const {
  revealCard,
  startNewGame,
  hideCards,
  guessedPaired,
  endGame,
  quitGame,
} = gamesSlice.actions;

export default gamesSlice.reducer;
