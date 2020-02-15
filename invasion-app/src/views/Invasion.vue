<template>
  <div class="invasion">
    <h1>Invasion Game</h1>
    <grid :tiles="board.grid" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Grid from "../components/Grid.vue";
import { defaultState, BoardState } from "../types";

@Component({ components : { 'grid' : Grid } })
export default class Invasion extends Vue {
  @Prop({
    default: () => {
      return defaultState;
    }
  })
  private board?: BoardState;
}
</script>

<style>
.invasion {
  background: lightgrey;
  padding: 15px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}

</style>
