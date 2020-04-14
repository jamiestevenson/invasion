import { GetterTree } from 'vuex';
import { InvasionState, Terrain, Tile, Consequence } from './types';
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
      return state.perimeter;
    },
    getConsequencesDeck(state): Consequence[] {
      return state.consequencesDeck;
    },
    getAlertLevel(state): number {
        return state.alertLevel;
    },
    getAlertComment(state): string {
        const level = state.alertLevel;
        switch(level) {
            case 0:
                return "No consequences cards. Resistance moves one space.";
            case 1:
                return "One rural consequence. Two urban consequences. Resistance moves one space.";
            case 2:
            case 3:
            case 4:
                return "Two rural consequences. Three urban consequences. Resistance moves two spaces.";
            case 5:
            case 6:
            case 7:
                return "Two rural consequences. Five urban consequences. Resistance moves two spaces.";
            case 8:
            case 9:
            default:
                return "No Data";
        }
    }
};