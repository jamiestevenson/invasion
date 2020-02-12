import { Component, Vue, Prop } from "vue-property-decorator";
import WithRender from "@/templates/hello-world.html";

@WithRender
@Component
export default class HelloWorld extends Vue {
  @Prop()
  public msg = "I am using TypeScript classes with Vue!";
}
