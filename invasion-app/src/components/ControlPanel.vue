<template>
  <div>
    <div>
      <button type="button" @click="newGame" name="New Game">New Game</button>
      <button type="button" >End Turn</button>
    </div>
    <div>
      <h3>Alert Level {{getAlertLevel}}</h3>
      <p>{{getAlertComment}}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { Action, Getter } from "vuex-class";
  import GridTile from "./GridTile.vue"

  const namespace = "invasion";

  @Component({ components : { 'gridtile': GridTile } })
  export default class ControlPanel extends Vue {
    @Action("newGame", { namespace }) newGame: any;
    @Getter("getAlertLevel", {namespace}) getAlertLevel : number; // eslint-disable-line
    @Getter("getAlertComment", {namespace}) getAlertComment : number; // eslint-disable-line
  }
</script>

<style>
table {
  border-collapse: collapse;
}

td {
  padding: 3px;
}

td.gridtile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>