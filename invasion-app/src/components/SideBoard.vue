<template>
  <div>
    <label v-if="getPerimeter===undefined||getPerimeter.length===0">No sideboard data!</label>
    <label v-else>Perimeter</label>
    <div>
      <gridtile
        class="perimeter-tile"
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
  position: relative;
  word-wrap: normal;
}

</style>