import { GetterTree } from 'vuex';
import { InvasionState, Terrain, Tile } from './types';
import { RootState } from '../types';

export const getters: GetterTree<InvasionState, RootState> = {
    boardSummary(state): string {
        let urban = 0;
        let rural = 0;
        const { grid } = state.board;
        grid.forEach(col => {
            col.forEach( tile  => {
                if (tile.terrain.category === Terrain.RURAL)
                {
                    rural++;
                }
                else if (tile.terrain.category === Terrain.URBAN) 
                {
                    urban++
                }
            })
        })
        return "Rural: " + rural + ", Urban: " + urban;
    },
    getPerimeter(state): Tile[] {
        return [
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
            }
        ];
    }
};