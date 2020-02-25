import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './../types';
import { invasion } from "@/invasion/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0' // a simple property
    },
    modules: {
        invasion
    }
};

export default new Vuex.Store<RootState>(store);
