import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdapters from '../adapters/album.adapters';
import * as fromActions from '../actions/album.actions';
import { AlbumState } from '../states/album.state';

export const initialState: AlbumState = fromAdapters.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function reducer(state = initialState, action: fromActions.ALBUM_ACTIONS): AlbumState {
    switch (action.type) {
        case fromActions.AlbumActionTypes.LOAD_ALBUMS: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.AlbumActionTypes.LOAD_ALBUMS_SUCCESS: {
            return fromAdapters.adapter.setAll(action.payload, { ...state, isLoading: false, success: true });
        }
        case fromActions.AlbumActionTypes.NEW_ALBUM: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.AlbumActionTypes.NEW_ALBUM_SUCCESS: {
            return fromAdapters.adapter.addOne(action.payload, { ...state, isLoading: false, success: true });
        }
        case fromActions.AlbumActionTypes.UPDATE_ALBUM: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.AlbumActionTypes.DELETE_ALBUM: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.AlbumActionTypes.ADD_COMMENT_TO_ALBUM: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.AlbumActionTypes.ERROR: {
            return { ...state, isLoading: false, success: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getAlbumState = createFeatureSelector<AlbumState>('albumState');
export const selectAlbum = createSelector(getAlbumState, fromAdapters.selectAlbums);
export const selectAlbumById = (id: number) => createSelector(getAlbumState, (state: AlbumState) => state.entities[id]);

export const getError = (state: AlbumState) => state.error;
export const getIsLoading = (state: AlbumState) => state.isLoading;
export const getSuccess = (state: AlbumState) => state.success;

export const selectAlbumsError = createSelector(getAlbumState, getError);
export const selectAlbumsIsLoading = createSelector(getAlbumState, getIsLoading);
export const selectAlbumsSuccess = createSelector(getAlbumState, getSuccess);