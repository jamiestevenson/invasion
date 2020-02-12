import { Component, Vue, Prop } from "vue-property-decorator";
import { Terrain } from "@/types";
import WithRender from "@/templates/grid.html";

@WithRender
@Component
export default class Grid extends Vue {
  @Prop()
  public tiles: Tile[][] = [
    [
      {
        terrain: {
          category: Terrain.RURAL,
          title: "Farm",
          description: "All the corn you can eat"
        },
        tokens: []
      },
      {
        terrain: {
          category: Terrain.RURAL,
          title: "Farm",
          description: "More corn..."
        },
        tokens: []
      },
      {
        terrain: {
          category: Terrain.RURAL,
          title: "Forest",
          description: "Trees and squirrels"
        },
        tokens: []
      }
    ],
    [
      {
        terrain: {
          category: Terrain.URBAN,
          title: "Township",
          description: "Unguarded..."
        },
        tokens: []
      },
      {
        terrain: {
          category: Terrain.HQ,
          title: "Crash Site",
          description: "A smoking wreckage"
        },
        tokens: ["drone", "drone", "drone"]
      },
      {
        terrain: {
          category: Terrain.RURAL,
          title: "Scrubland",
          description: "Tumbleweeds"
        },
        tokens: []
      }
    ],
    [
      {
        terrain: {
          category: Terrain.RURAL,
          title: "Farm",
          description: "More corn..."
        },
        tokens: []
      },
      {
        terrain: {
          category: Terrain.URBAN,
          title: "Industrial Belt",
          description: "Lots of metal and smoke - and power"
        },
        tokens: []
      },
      {
        terrain: {
          category: Terrain.URBAN,
          title: "Suburbs",
          description: "Generic family homes and malls"
        },
        tokens: []
      }
    ]
  ];
}

interface Tile {
  terrain: {
    category: Terrain;
    title: string;
    description: string;
  };
  tokens: string[];
}

// <style>
// /* Tooltip container */
// .tooltip {
//   position: relative;
//   display: inline-block;
//   border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
// }

// /* Tooltip text */
// .tooltip .tooltiptext {
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;
 
//   /* Position the tooltip text - see examples below! */
//   position: absolute;
//   z-index: 1;
// }

// /* Show the tooltip text when you mouse over the tooltip container */
// .tooltip:hover .tooltiptext {
//   visibility: visible;
// }
// </style>