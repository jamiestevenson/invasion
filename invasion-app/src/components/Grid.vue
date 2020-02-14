<template>
    <div>
      <label v-if="!tiles">No board data!</label>
      <label v-else >Found board data!</label>
      <table>
        <tr :v-for="r in tiles">
          <td :v-for="t in r">
            {{t.terrain.category}}
          </td>
        </tr>
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Tile } from "../types";

@Component
export default class Grid extends Vue {
  @Prop() private tiles?: Tile[][];
}
</script>

<style>
</style>