<template>
  <div>
    <button type="button" @click="newGame" name="New Game">New Game</button>
    <button type="button" >End Turn</button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { Action } from "vuex-class";
  import GridTile from "./GridTile.vue"

  const namespace = "invasion";

  @Component({ components : { 'gridtile': GridTile } })
  export default class ControlPanel extends Vue {
    @Action("newGame", { namespace }) newGame: any;
  }
</script>

<style>
table {
  border-collapse: collapse;
  /* table-layout: fixed;*/
  /*width: 90%;*/
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