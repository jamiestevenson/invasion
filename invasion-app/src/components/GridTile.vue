<template>
  <div :class="'tile '+tile.terrain.category" v-if="tile">
    <label class="centre heavy" >{{tile.terrain.title}}</label>
    <br/>
    <label class="small left" >{{tile.terrain.description}}</label>
    <ul>
      <li class="small" v-for="(token, index) in tile.tokens" :key="index">
        {{token}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Tile } from "../types";

@Component
export default class GridTile extends Vue {
  @Prop() private tile?: Tile;
}
</script>

<style>
.tile {
  width: 120px;
  height: 120px;
}

.centre {
  text-align: center;
}

.heavy {
  font-weight: bold;
}

.small {
  font-size: small
}

.left {
  text-align: left;
}

.URBAN {
  color: white;
  background-color: cadetBlue;
}

.RURAL {
  color: white;
  background-color: forestGreen;
}

.HQ {
  color: white;
  background-color: tomato;
}
</style>