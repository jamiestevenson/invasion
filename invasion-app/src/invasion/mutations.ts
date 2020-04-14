import { MutationTree } from "vuex";
import { InvasionState, Tile, newBoardState, perimeterDeckCopy, consequencesDeckCopy, Consequence } from "./types";

function shuffle(array: any[]) {
    array.sort(() => Math.random() - 0.5);
}

export const mutations: MutationTree<InvasionState> = {
  setUpNewGame(state: InvasionState) {
    state.message = "board loaded";
    state.board = newBoardState();

    state.perimeterSize = 3;
    const perimDeck = perimeterDeckCopy();
    shuffle(perimDeck);
    const dealt = perimDeck.slice(0, state.perimeterSize);
    const deck = perimDeck.slice(state.perimeterSize);
    state.perimeterDeck = deck;
    state.perimeter = dealt;

    const consDeck = consequencesDeckCopy();
    shuffle(consDeck)
    state.consequencesDeck = consDeck;

    state.alertLevel = 0;
  },
  loadBoardError(state) {
    state.message = "error loading board";
    state.board.grid = [];
  }
};
