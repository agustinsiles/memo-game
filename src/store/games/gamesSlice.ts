import { Game } from "@/models/Game";
import { GameStatus } from "@/utils/enums";
import { shuffleCards } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/games.json";

type State = {
  games: Game[];
  activeGame?: number;
};
const initialState: State = {
  games: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    startNewGame: (state) => {
      const gameId = Math.random();

      state.games.push({
        id: gameId,
        cards: shuffleCards(data.cards),
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

export const { revealCard, startNewGame, hideCards, guessedPaired, endGame } =
  gamesSlice.actions;

export default gamesSlice.reducer;