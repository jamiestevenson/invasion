export enum Terrain {
  URBAN = "URBAN",
  RURAL = "RURAL",
  HQ = "HQ",
  UNEXPLORED = "UNEXPLORED"
}

export enum Navigability {
  NONE = "0",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  UNLIMITED = "1000" // Keep an eye on this, anticipate many fewer units on board
}

const unexploredTile: Tile = {
  terrain: {
    category: Terrain.UNEXPLORED,
    title: "Unexplored",
    description: "???",
    resources: {},
    movement: Navigability.NONE
  },
  tokens: []
};

const perimeterDeck: Tile[] = [
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Scrubland",
      description: "Rocks and weeds",
      resources: {
        material: 1
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Canyon River",
      description: "Crossed by a bridge",
      resources: {
        material: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Wind Farm",
      description: "Power for the taking",
      resources: {
        power: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Ghost Town",
      description: "Not a living soul",
      resources: {
        material: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Lake",
      description: "Little of use",
      resources: {
        material: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Village",
      description: "",
      resources: {
        population: 1,
        power: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Park",
      description: "",
      resources: {
        material: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Orchard",
      description: "",
      resources: {
        population: 1,
        material: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Gas Station",
      description: "A lonely highway stop",
      resources: {
        material: 1,
        power: 1
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Forest",
      description: "",
      resources: {
        material: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Highway",
      description: "",
      resources: {
        material: 1
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Farm",
      description: "",
      resources: {
        population: 1,
        material: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Trailer Park",
      description: "",
      resources: {
        population: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Golf Course",
      description: "",
      resources: {
        material: 1
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Exhausted Mine",
      description: "",
      resources: {
        material: 1
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.RURAL,
      title: "Farm",
      description: "",
      resources: {
        material: 1,
        power: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Landfill",
      description: "",
      resources: {
        material: 2
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Smelting Plant",
      description: "",
      resources: {
        material: 2,
        power: 2
      },
      reinforcement: 1,
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Hydroelectric Dam",
      description: "",
      resources: {
        material: 1,
        power: 2
      },
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Coal Power Station",
      description: "",
      resources: {
        power: 3
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Nuclear Power Station",
      description: "",
      resources: {
        material: 1,
        power: 3
      },
      reinforcement: 1,
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Airport",
      description: "",
      resources: {
        material: 1,
        power: 1,
        population: 1
      },
      reinforcement: 1,
      movement: Navigability.UNLIMITED
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Port",
      description: "",
      resources: {
        material: 2,
        population: 1
      },
      reinforcement: 1,
      movement: Navigability.UNLIMITED
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Military Base",
      description: "",
      resources: {
        material: 2,
        power: 1,
        population: 2
      },
      reinforcement: 3,
      movement: Navigability.UNLIMITED
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "City",
      description: "",
      resources: {
        material: 1,
        power: 1,
        population: 3
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Mine",
      description: "",
      resources: {
        material: 2,
        population: 1
      },
      reinforcement: 1,
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Strip Mine",
      description: "",
      resources: {
        material: 2,
        power: 1
      },
      reinforcement: 1,
      movement: Navigability.ONE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Airforce Base",
      description: "",
      resources: {
        material: 2,
        power: 1,
        population: 1
      },
      reinforcement: 2,
      movement: Navigability.UNLIMITED
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Theme Park",
      description: "",
      resources: {
        population: 2,
        power: 1
      },
      movement: Navigability.TWO
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "Factories",
      description: "",
      resources: {
        population: 1,
        power: 1,
        material: 2
      },
      movement: Navigability.THREE
    },
    tokens: []
  },
  {
    terrain: {
      category: Terrain.URBAN,
      title: "City",
      description: "",
      resources: {
        population: 3,
        power: 2,
        material: 2
      },
      reinforcement: 1,
      movement: Navigability.THREE
    },
    tokens: []
  }
];

const buildings: Building[] = [
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
        effects: [
          "Broadcast Power: Drones move out of this location for no movement cost"
        ]
      },
      {
        requirement: {
          power: 1,
          material: 1
        },
        effects: [
          "Hazard: Reduce resistance stacks that enter this location by one"
        ]
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
        requirement: {
          population: 1,
          material: 1
        },
        effects: [
          "Hazard: Reduce resistance stacks that enter this location by one"
        ]
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
      material: 2
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
      material: 1,
      power: 2
    },
    effects: ["Increase ALERT level (when first placed)"],
    upgrades: [
      {
        requirement: {
          material: 1,
          power: 3
        },
        effects: [
          "TRIGGER: Start of Invader's turn. EFFECT: Place a 'Teleport Drone' token on this location",
          "TRIGGER: Use a 'Teleport Drone' token. EFFECT: Move a drone from any invaded tile to any invaded tile"
        ]
      },
      {
        requirement: {
          material: 1,
          power: 2,
          population: 2
        },
        effects: ["EFFECT: Reduce alert level by 2"]
      }
    ]
  },
  {
    name: "Fabricator",
    drones: 4,
    requirement: {
      material: 1,
      power: 1,
      population: 1
    },
    effects: [
      "Gain one TECH",
      "TRIGGER: Begin invader's turn. EFFECT: Two drones spawn at this location"
    ],
    upgrades: [
      {
        requirement: {
          material: 1,
          power: 2,
          population: 1
        },
        effects: ["EFFECT: Drones leave this location for no mevement cost"]
      },
      {
        requirement: {
          material: 2,
          power: 1,
          population: 2
        },
        effects: ["EFFECT: Reduce alert level by 2"]
      }
    ]
  },
  {
    name: "Pylon",
    drones: 5,
    requirement: {
      material: 2,
      power: 2
    },
    effects: [
      "Gain one TECH",
      "Counts for all purposes as a second HQ",
      "Drones move between HQs as if they are adjacent"
    ],
    upgrades: [
      {
        requirement: {
          material: 2,
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
      material: 1,
      power: 2
    },
    effects: [
      "TRIGGER: Spend one drone at this location. EFFECT: In adjacent location EITHER reduce all resistance stacks by one OR reduce one resistance stack by this location's POWER",
      "Counts for all purposes as a second HQ",
      "Drones move between HQs as if they are adjacent"
    ],
    upgrades: [
      {
        requirement: {
          material: 1,
          power: 3
        },
        effects: ["Range increases to two (i.e. adjacent to adjacent)"]
      },
      {
        requirement: {
          material: 1,
          power: 2,
          population: 1
        },
        effects: [
          "You may activate this location after resistance units have moved."
        ]
      }
    ]
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
    description: "A smoking wreck",
    movement: Navigability.UNLIMITED,
    resources: {},
    reinforcement: 0
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
  board: newBoardState(),
  perimeter: [],
  perimeterDeck: [],
  perimeterSize: 3,
  consequencesDeck: [],
  alertLevel: 0,
  message: "Initial message"
};

export interface InvasionState {
  board: BoardState;
  perimeter: Tile[];
  perimeterDeck: Tile[];
  perimeterSize: number;
  consequencesDeck: Consequence[];
  alertLevel: number;
  message: string;
}

export interface Tile {
  terrain: {
    category: Terrain;
    title: string;
    description: string;
    resources: Resources;
    reinforcement?: number;
    movement: Navigability;
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
  name: string;
  drones: number;
  requirement: Resources;
  effects: string[];
  upgrades: BuildingUpgrade[];
}

// NOTE may make this just a recursive reference to a Building
// Will likely mean adding a reference to the parent building type.
export interface BuildingUpgrade {
  requirement: Resources;
  effects: string[];
}

export interface Resources {
  power?: number;
  material?: number;
  population?: number;
}
