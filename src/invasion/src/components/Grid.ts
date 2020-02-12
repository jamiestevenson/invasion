import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from "@/templates/grid.html";

@WithRender
@Component
export default class Grid extends Vue {
  @Prop()
  public tiles : string[][] = [["1","2","3"],["4","5","6"],["7","8","9"]];
}