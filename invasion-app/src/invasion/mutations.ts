import { MutationTree } from "vuex";
import { InvasionState, Tile, newBoardState, perimeterDeckCopy } from "./types";

function shuffle(array: Tile[]) {
    array.sort(() => Math.random() - 0.5);
}

export const mutations: MutationTree<InvasionState> = {
  setUpNewGame(state: InvasionState) {
    console.log("board state before setting up new game: " + JSON.stringify(state));
    state.message = "board loaded";
    state.board = newBoardState();
    state.perimeterSize = 3;
    const perimDeck = perimeterDeckCopy();
    shuffle(perimDeck);
    const dealt = perimDeck.slice(0, state.perimeterSize);
    const deck = perimDeck.slice(state.perimeterSize);
    state.perimeterDeck = deck;
    state.perimeter = dealt;
    console.log("board state after setting up new game: " + JSON.stringify(state));
  },
  loadBoardError(state) {
    state.message = "error loading board";
    state.board.grid = [];
  }
};
