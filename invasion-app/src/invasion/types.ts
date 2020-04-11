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
    quote: "Perhaps you should have studied harder."
  },
  {
    title: "Influential Collaborators",
    effects: [
      "PLACE: A 'Collaborators' token on a perimeter tile",
      "TRIGGER: Spend one drone at this location to move the Collaborators token to a perimeter tile",
      "EFFECT: When this perimeter tile is invaded, reduce the panic level by the population of this tile"
    ],
    quote: "They will be last.",
    note: "Token remains on perimeter tile after it is invaded"
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

const buildings : Building = [
  {
    name: "Relay",
    drones: 2,
    requirement: {
      power: 1
    },
    effects: ["Place +1 POWER token on an adjacent location"],
    upgrades: [
      {
        requirement: {
          power: 2
        },
        effects: ["Broadcast Power: Drones move out of this location for no movement cost"]
      },
      {
        requirements: {
          power: 1,
          materials: 1
        },
        effects: ["Hazard: Reduce resistance stacks that enter this location by one"]
      }
    ]
  },
  {
    name: "Conveyer",
    drones: 2,
    requirement: {
      material: 1
    },
    effects: ["Place +1 MATERIAL token on an adjacent location"],
    upgrades: [
      {
        requirement: {
          material: 3
        },
        effects: ["Place +1 MATERIAL token on an adjacent location"]
      },
      {
        requirements: {
          population: 1,
          materials: 1
        },
        effects: ["Hazard: Reduce resistance stacks that enter this location by one"]
      }
    ]
  },
  {
    name: "Drone Hive",
    drones: 3,
    requirement: {
      population: 1
    },
    effects: ["One drone spawns here on the invader's turn"],
    upgrades: [
      {
        requirement: {
          material: 1,
          power: 1,
          population: 1
        },
        effects: ["One additional drone spawns here on the invader's turn"]
      }
    ]
  },
  {
    name: "Pod Farm",
    drones: 3,
    requirement: {
      population: 2
    },
    effects: ["Gain one TECHNOLOGY"],
    upgrades: [
      {
        requirement: {
          population: 2,
          power: 1
        },
        effects: ["One additional drone spawns here on the invader's turn"]
      },
      {
        requirement: {
          population: 3
        },
        effects: ["Gain one additional POD SOLDIER"]
      }
    ]
  },
  {
    name: "Laboratory",
    drones: 3,
    requirement: {
      power: 2,
      materials: 2
    },
    effects: [
      "Gain one TECHNOLOGY",
      "TRIGGER: Consume four drones at this location. EFFECT: Gain a TECH",
      "TRIGGER: Consume drone at this location to CYCLE a building of the same cost or lower",
      "SYNERGY: Pylon exists. EFFECT: -1 TECH cost",
      "SYNERGY: Skybeam exists. EFFECT: -1 TECH cost"
    ],
    upgrades: []
  },
  {
    name: "Skybeam Array",
    drones: 3,
    requirement: {
      materials: 1,
      power: 2
    },
    effects: [
      "Increase ALERT level (when first placed)"
    ],
    upgrades: [
      {
        requirement:{
          materials: 1,
          power: 3,
        },
        effects: [
          "TRIGGER: Start of Invader's turn. EFFECT: Place a 'Teleport Drone' token on this location",
          "TRIGGER: Use a 'Teleport Drone' token. EFFECT: Move a drone from any invaded tile to any invaded tile"
        ]
      },
      {
        requirement:{
          materials: 1,
          power: 2,
          population: 2
        },
        effects: [
          "EFFECT: Reduce alert level by 2"
        ]
      }
    ]
  },
  {
    name: "Fabricator",
    drones: 4,
    requirement: {
      materials: 1,
      power: 1,
      population: 1
    },
    effects: [
      "Gain one TECH",
      "TRIGGER: Begin invader's turn. EFFECT: Two drones spawn at this location"
    ],
    upgrades: [
      {
        requirement:{
          materials: 1,
          power: 2,
          population: 1,
        },
        effects: [
          "EFFECT: Drones leave this location for no mevement cost"
        ]
      },
      {
        requirement:{
          materials: 2,
          power: 1,
          population: 2
        },
        effects: [
          "EFFECT: Reduce alert level by 2"
        ]
      }
    ]
  },
  {
    name: "Pylon",
    drones: 5,
    requirement: {
      materials: 2,
      power: 2
    },
    effects: [
      "Gain one TECH",
      "Counts for all purposes as a second HQ",
      "Drones move between HQs as if they are adjacent"
    ],
    upgrades: [
      {
        requirement:{
          materials: 2,
          power: 2,
          population: 1
        },
        effects: [
          "TRIGGER: Spend one drone at this location. EFFECT: Reduce panic level at this location by its population"
        ]
      }
    ]
  },
  {
    name: "Death Ray",
    drones: 5,
    requirement: {
      materials: 1,
      power: 2
    },
    effects: [
      "TRIGGER: Spend one drone at this location. EFFECT: In adjacent location EITHER reduce all resistance stacks by one OR reduce one resistance stack by this location's POWER",
      "Counts for all purposes as a second HQ",
      "Drones move between HQs as if they are adjacent"
    ],
    upgrades: [
      {
        requirement:{
          materials: 1,
          power: 3
        },
        effects: [
          "Range increases to two (i.e. adjacent to adjacent)"
        ]
      },
      {
        requirement:{
          materials: 1,
          power: 2,
          population: 1,
        },
        effects: [
          "You may activate this location after resistance units have moved."
        ]
      }
    ]
  }
]

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

export interface Building {
  name: string,
  drones: number,
  requirement: Resources,
  effect: string[]
}

export interface Resources {
  power: number,
  material: number,
  population: number
}