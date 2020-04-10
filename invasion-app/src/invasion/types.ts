export enum Terrain {
  URBAN = "URBAN",
  RURAL = "RURAL",
  HQ = "HQ",
  UNEXPLORED = "UNEXPLORED"
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

const unexploredTile: Tile = {
  terrain: {
    category: Terrain.UNEXPLORED,
    title: "Unexplored",
    description: "???"
  },
  tokens: []
};

const perimeterDeck: Tile[] = [
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Fields",
      description: "Fallow"
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Fields",
      description: "Fallow"
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "A Mall",
      description: "Bright lights"
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Fields",
      description: "Fallow"
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Factories",
      description: "Useful for rebuilding"
    },
    tokens: []
  }
];

const consequencesDeck : Consequence[] = [
  {
    title: "Survivalist Bunker",
    effects: [
      "PLACE: 'Armed Resistance' token on any explored tile in the edge of the map",
      "TRIGGER: A Resitance stack or Invader unit enters the same tile as the 'Armed Resistance' token",
      "EFFECT: Destroy that entering unit/stake and remove the 'Armed Resistance' token"
    ],
    quote: "It's a wonder they got this far...",
    note: "Resolves after step B"
  },
  {
    title: "Materials Cache",
    effects: [
      "PLACE: a 'Mineral Seam' token on an invaded tile",
      "TRIGGER: 1 Drone is present",
      "EFFECT: Add +1 MINERALS to this tile and remove the 'Mineral Seam' token"
    ],
    quote: "They did not know what they had."
  },
  {
    title: "Summer Camp",
    effects: [
      "PLACE: a 'Tourists' token on an invaded tile.",
      "TRIGGER: 1 Drone is present",
      "EFFECT: Add +1 POPULATION to this tile and remove the 'Tourists' token"
    ],
    quote: "You'll never want to leave."
  },
  {
    title: "Backup Generators",
    effects: [
      "PLACE: A 'Generators' token on an invaded tile.",
      "TRIGGER: 1 Drone is present",
      "EFFECT: Add +1 ENERGY to this tile and remove the 'Generators' token"
    ],
    quote: "Sadly, not unlimited..."
  },
  {
    title: "Secret Lab!",
    effects: [
      "PLACE: A 'Secret Lab' token on the newest perimeter tile",
      "TRIGGER: The perimeter tile with the token is invaded",
      "EFFECT: Gain one TECH"
    ],
    quote: "Perhaps you shoudl have studied harder."
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from N"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from N-N-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from N-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from E-N-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from E-S-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from S-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from S-S-E"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from S"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from S-S-W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from S-W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from W-S-W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from W-N-W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from N-W"]
  },
  {
    title: "Resistance",
    effects: ["Place a resistance token from N-N-W"]
  }
];

const hqTile: Tile = {
  terrain: {
    category: Terrain.HQ,
    title: "Crash Site",
    description: "A smoking wreck"
  },
  tokens: ["drone", "drone", "drone"]
};

const startingGrid: Tile[][] = [
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}]
] as Tile[][];

export function newBoardState(): BoardState {
  let newGrid = startingGrid;
  newGrid = newGrid.map(row => row.fill(unexploredTile));
  newGrid[2][2] = hqTile;
  return { grid: newGrid };
}

export function perimeterDeckCopy(): Tile[] {
  // Ensures a deep copy with no refrences between the template deck and the volatile game deck.
  return JSON.parse(JSON.stringify(perimeterDeck));
}

export function consequencesDeckCopy(): Consequence[] {
  return JSON.parse(JSON.stringify(consequencesDeck));
}

export const state: InvasionState = {
  board: defaultState,
  perimeter: [],
  perimeterDeck: [],
  perimeterSize: 3,
  consequencesDeck: [],
  message: "Initial message"
};

export interface InvasionState {
  board: BoardState;
  perimeter: Tile[];
  perimeterDeck: Tile[];
  perimeterSize: number;
  consequencesDeck: Consequence[];
  message: string;
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

export interface Consequence {
  title: string;
  effects: string[];
  quote?: string;
  note?: string;
}