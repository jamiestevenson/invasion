<template>
  <div>
    <div style="align:centre" >
      <h2>Consequences</h2>
      <label >Remaining: {{getConsequencesDeck===undefined ? 0 : getConsequencesDeck.length}}</label>
    </div>
      <div>
      <h2>Perimeter</h2>
      <label v-if="getPerimeter===undefined||getPerimeter.length===0">No sideboard data!</label>
      </div>
    <div class="centre">
      <gridtile
        style="margin: 0 auto"
        v-for="(t, index) in getPerimeter" 
        :tile="t" 
        :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { Tile } from "@/invasion/types";
import GridTile from "./GridTile.vue";

const namespace = "invasion";

@Component({ components : { 'gridtile': GridTile } })
export default class SideBoard extends Vue {
  @Getter("getPerimeter", { namespace }) getPerimeter : Tile[];
  @Getter("getConsequencesDeck", { namespace }) getConsequencesDeck : Consequences[];
}
</script>

<style>

table {
  border-collapse: collapse;
  /*width: 90%;*/
  position: center;
}

.perimeter-tile.tile {
  /*padding top, lr, bottom*/
  padding: 5px 3px 5px;
  word-wrap: normal;
}

</style>