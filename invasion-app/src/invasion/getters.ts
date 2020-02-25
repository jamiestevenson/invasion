import { GetterTree } from 'vuex';
import { InvasionState, Terrain } from './types';
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
    }
};