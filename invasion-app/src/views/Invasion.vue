<template>
  <div class="invasion">
    <h1>Invasion Game</h1>
    <controlpanel />
    <grid :tiles="game.board.grid" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
import Grid from "@/components/Grid.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import { BoardState } from "@/invasion/types";

const namespace = "invasion";

@Component({ components: { grid: Grid, controlpanel: ControlPanel } })
export default class Invasion extends Vue {
  @State('invasion') game?: BoardState;
  @Action("newGame" , { namespace }) newGame: any;
  @Getter("boardSummary", { namespace }) boardSummary: string; 
}
</script>

<style>
.invasion {
  background: lightgrey;
  padding: 15px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}
</style>
