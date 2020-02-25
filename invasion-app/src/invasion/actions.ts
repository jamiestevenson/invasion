import { ActionTree } from 'vuex';
import { InvasionState, BoardState } from './types';
import { RootState } from '../types';
import { newBoardState } from "@/invasion/types";


export const actions: ActionTree<InvasionState, RootState> = {
    newGame({ commit }): any {
        console.log("Action fired - new game");
        commit('setUpNewGame');
    }
};