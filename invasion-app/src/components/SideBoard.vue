<template>
  <div>
    <div style="align:centre" >
      <h2>Consequences</h2>
      <label >Remaining: {{getConsequencesDeck === undefined ? 0 : getConsequencesDeck.length}}</label>
    </div>
    <div>
      <h2>Perimeter</h2>
      <label v-if="getPerimeter === undefined || getPerimeter.length === 0">No sideboard data!</label>
    </div>
    <div class="centre">
      <gridtile
        style="margin: 0 auto"
        v-for="(t, index) in getPerimeter"
        :tile="t"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
<<<<<<< HEAD
import { Tile, Consequence } from "@/invasion/types";
=======
import { Tile } from "@/invasion/types";
>>>>>>> ce5d581c7f81df32dc69a514e4b01c6be9123f6e
import GridTile from "./GridTile.vue";

const namespace = "invasion";

<<<<<<< HEAD
@Component({ components : { gridtile: GridTile } })
export default class SideBoard extends Vue {
  @Getter("getPerimeter", { namespace }) getPerimeter : Tile[]; // eslint-disable-line
  @Getter("getConsequencesDeck", { namespace }) getConsequencesDeck : Consequence[]; // eslint-disable-line
=======
@Component({ components : { 'gridtile': GridTile } })
export default class SideBoard extends Vue {
  @Getter("getPerimeter", { namespace }) getPerimeter : Tile[];
  @Getter("getConsequencesDeck", { namespace }) getConsequencesDeck : Consequences[];
>>>>>>> ce5d581c7f81df32dc69a514e4b01c6be9123f6e
}
</script>

<style>
<<<<<<< HEAD
=======

>>>>>>> ce5d581c7f81df32dc69a514e4b01c6be9123f6e
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
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> ce5d581c7f81df32dc69a514e4b01c6be9123f6e
