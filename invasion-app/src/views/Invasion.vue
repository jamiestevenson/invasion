<template>
  <div class="invasion">
    <h1>Invasion Game</h1>
    <Grid />
  </div>
</template>

<script>
  import { Component, Vue, Props } from "vue-class-component";
  import { Grid } from "@/components/Grid"

  @Component({components: { Grid }})
  export default class Invasion extends Vue{
    
  }
</script>