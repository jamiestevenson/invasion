<template>
  <div :class="'tile ' + tile.terrain.category" v-if="tile">
    <label class="centre heavy" >{{tile.terrain.title}}</label>
    <br/>
    <label class="small left" >{{tile.terrain.description}}</label>
    <div v-if="tile.terrain.resources">
      <label v-if="tile.terrain.resources.power">{{"⚡".repeat(tile.terrain.resources.power)}}</label>
      <label v-if="tile.terrain.resources.material">{{"💎".repeat(tile.terrain.resources.material)}}</label>
      <label v-if="tile.terrain.resources.population">{{"👤".repeat(tile.terrain.resources.population)}}</label>
    </div>
    <ul>
      <li class="small" v-for="(token, index) in tile.tokens" :key="index">
        {{token}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Tile } from "@/invasion/types";

@Component
export default class GridTile extends Vue {
  @Prop() private tile?: Tile;
}
</script>

<style>
.tile {
  width: 120px;
  height: 120px;
  border-radius: 5px;
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
  box-shadow: 5px 5px 5px grey;
}

.RURAL {
  color: white;
  background-color: forestGreen;
  box-shadow: 5px 5px 5px grey;
}

.HQ {
  color: white;
  background-color: tomato;
  box-shadow: 5px 5px 5px grey;
}

.UNEXPLORED {
  width: 100px;
  height: 100px;
  background-color: silver;
  animation-name: fogofwar;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}

@keyframes fogofwar {
  0%  {background-color: grey;}
  50% {background-color: lightgrey;}
  100% {background-color: grey;}
}
</style>