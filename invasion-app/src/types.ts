
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