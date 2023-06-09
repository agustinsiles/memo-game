import { Game } from "@/models/Game";
import { GameCategories, GameStatus } from "@/utils/enums";
import { getCurrentHighestScore, getScore, shuffleCards } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import cards from "../../utils/cards.json";

type IState = {
  games: Game[];
  activeGame?: number;
};

let savedSession;

if (typeof window !== "undefined") {
  // Wait for the browser to render
  savedSession = localStorage.getItem("memoGames");
}

const initialState: IState = savedSession
  ? JSON.parse(savedSession)
  : {
      games: [],
      activeGame: undefined,
    };

function saveSession(state: IState) {
  localStorage.setItem("memoGames", JSON.stringify(state));
}

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
        retries: 0,
        hasHighestScore: false,
      });

      state.activeGame = gameId;

      saveSession(state);
    },
    resumeGame: (state, action) => {
      state.activeGame = action.payload.gameId;
      saveSession(state);
    },
    endGame: (state) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;

      currentGame.status = GameStatus.OVER;
      currentGame.score = getScore(
        currentGame.retries,
        currentGame.cards.length / 2
      );

      const highestScore = getCurrentHighestScore(state.games);
      currentGame.hasHighestScore = highestScore <= currentGame.score;

      saveSession(state);
    },
    quitGame: (state) => {
      state.activeGame = undefined;
      saveSession(state);
    },
    revealCard: (state, action) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;

      const card = action.payload;
      if (currentGame.flippedCards.length < 2) {
        currentGame.flippedCards.push(card);
        if (currentGame.flippedCards.length === 2) currentGame.retries++;
      }
      saveSession(state);
    },
    hideCards: (state) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;
      currentGame.flippedCards = [];
      saveSession(state);
    },
    guessedPaired: (state) => {
      const currentGame = state.games.find(
        (game) => game.id === state.activeGame
      )!;
      currentGame.guessedCards.push(...currentGame.flippedCards);
      currentGame.flippedCards = [];
      saveSession(state);
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
  resumeGame,
} = gamesSlice.actions;

export default gamesSlice.reducer;
