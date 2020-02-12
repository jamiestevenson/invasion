import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld";
import Grid from "@/components/Grid";
import WithRender from "@/templates/home.html";

@WithRender
@Component({
  components: {
    HelloWorld, Grid
  }
})
export default class Home extends Vue {}
