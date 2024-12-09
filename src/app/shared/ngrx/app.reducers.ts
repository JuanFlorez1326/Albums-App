import { AppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import * as albumReducers from '../../album/store/reducers/album.reducers';

export const reducers: ActionReducerMap<AppState, any> = {
    albumState: albumReducers.reducer
}