<template>
  <div class="invasion">
    <h1>Invasion Game</h1>
    <controlpanel />
    <div>
      <div
        style="display:flex;justify-content:center;align-items:center;float:left"
      >
        <grid :tiles="game.board.grid" />
      </div>
      <div style="float:right">
        <sideboard :tiles="game.perimeter" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";
import Grid from "@/components/Grid.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import SideBoard from "@/components/SideBoard.vue";
import { BoardState } from "@/invasion/types";

const namespace = "invasion";

@Component({
  components: {
    grid: Grid,
    controlpanel: ControlPanel,
    sideboard: SideBoard
  }
})
export default class Invasion extends Vue {
  @State("invasion") game?: BoardState;
  @Action("newGame", { namespace }) newGame: void; // eslint-disable-line
}
</script>

<style>
.invasion {
  background: palegreen;
  padding: 15px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}
</style>
