<template>
  <div>
    <label v-if="!tiles">No board data!</label>
    <label v-else>{{boardSummary}}</label>
    <table>
      <tr v-for="(row, rindex) in tiles" :key="rindex">
        <td v-for="(t, tindex) in row" :key="tindex">
        <gridtile class="gridtile" :tile="t" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { Tile } from "@/invasion/types";
import GridTile from "./GridTile.vue";

const namespace = "invasion";

@Component({ components : { 'gridtile': GridTile } })
export default class Grid extends Vue {
  @Prop() private tiles?: Tile[][];
  @Getter("boardSummary", { namespace }) boardSummary : string;
}
</script>

<style>
table {
  border-collapse: collapse;
  /*width: 90%;*/
  position: center;
}

table, th, td {
  border: 1px solid seagreen;
}

td {
  padding: 3px;
  /*width: 20%;*/
  /* position: relative; */
}

/*td:after {
  content: '';
  display: block;
  margin-top: 100%;
}*/

td.gridtile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>