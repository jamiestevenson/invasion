export enum Terrain {
  URBAN = "URBAN",
  RURAL = "RURAL",
  HQ = "HQ"
}

export interface Tile {
  terrain: {
    category: Terrain;
    title: string;
    description: string;
  };
  tokens: string[];
}

export interface BoardState {
  grid: Tile[][];
}

export const defaultState: BoardState = {
  grid: [
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
  ]
};
