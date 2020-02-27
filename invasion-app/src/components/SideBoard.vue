<template>
  <div>
    <label v-if="!sideboard">No sideboard data!</label>
    <label v-else>Sideboard</label>
    <div>
      <tile
        class="perimeter-tile"
        v-for="(t, index) in getPerimeter" 
        :tile="t" 
        :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { Tile } from "@/invasion/types";
import GridTile from "./GridTile.vue";

const namespace = "invasion";

@Component({ components : { 'tile': GridTile } })
export default class SideBoard extends Vue {
  @Getter("getPerimeter", { namespace }) getPerimeter : Tile[];
}
</script>

<style>
table {
  border-collapse: collapse;
  /*width: 90%;*/
  position: center;
}

table, th, td {
  /* border: 1px solid seagreen; */
}

td {
  /*width: 20%;*/
  /* position: relative; */
}

/*td:after {
  content: '';
  display: block;
  margin-top: 100%;
}*/

/*td.gridtile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}*/

.perimeter-tile.tile {
  padding-top: 40px;
  position: relative;
}

</style>