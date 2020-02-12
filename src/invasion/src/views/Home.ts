import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld";
import WithRender from "@/templates/home.html";

@WithRender
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
