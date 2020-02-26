import { MutationTree } from 'vuex';
import { InvasionState, BoardState, newBoardState } from './types';

export const mutations: MutationTree<InvasionState> = {
    setUpNewGame(state, payload: BoardState) {
        state.message = "board loaded";
        state.board = newBoardState();
    },
    loadBoardError(state) {
        state.message = "error loading board";
        state.board.grid = [];
    }
};