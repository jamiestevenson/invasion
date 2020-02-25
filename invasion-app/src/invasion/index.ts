import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { InvasionState } from "./types";
import { RootState } from "../types";

export const state: InvasionState = {
    board: { grid: []},
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
