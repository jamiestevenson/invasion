import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { InvasionState } from "./types";
import { RootState } from "../types";

// NOTE - reactive variables must be initialised in this initial state!
export const state: InvasionState = {
    board: { grid: []},
    perimeter: [],
    perimeterDeck: [],
    perimeterSize: 0,
    message: "Empty state"
};

const namespaced = true;

export const invasion: Module<InvasionState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
