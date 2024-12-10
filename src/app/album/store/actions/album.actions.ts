import { Action } from '@ngrx/store';
import { Album } from '../../interfaces/album.interface';

export enum AlbumActionTypes {
    LOAD_ALBUMS = '[Album] Load Albums',
    LOAD_ALBUMS_SUCCESS = '[Album] Load Albums Success',
    NEW_ALBUM = '[Album] New Album',
    NEW_ALBUM_SUCCESS = '[Album] New Album Success',
    UPDATE_ALBUM = '[Album] Update Album',
    DELETE_ALBUM = '[Album] Delete Album',
    ADD_COMMENT_TO_ALBUM = '[Album] Add Comment To Album',
    ERROR = '[Album] Error'
}

export class LoadAlbums implements Action {
    readonly type = AlbumActionTypes.LOAD_ALBUMS;
}

export class LoadAlbumsSuccess implements Action {
    readonly type = AlbumActionTypes.LOAD_ALBUMS_SUCCESS;
    constructor(public payload: Album[]) {}
}

export class NewAlbum implements Action {
    readonly type = AlbumActionTypes.NEW_ALBUM;
    constructor(public payload: Album) {}
}

export class NewAlbumSuccess implements Action {
    readonly type = AlbumActionTypes.NEW_ALBUM_SUCCESS;
    constructor(public payload: Album) {}
}

export class UpdateAlbum implements Action {
    readonly type = AlbumActionTypes.UPDATE_ALBUM;
    constructor(public payload: any) {}
}

export class DeleteAlbum implements Action {
    readonly type = AlbumActionTypes.DELETE_ALBUM;
    constructor(public payload: number) {}
}

export class AddCommentToAlbum implements Action {
    readonly type = AlbumActionTypes.ADD_COMMENT_TO_ALBUM;
    constructor(public payload: any) {}
}

export class AlbumError implements Action {
    readonly type = AlbumActionTypes.ERROR;
    constructor(public payload: any) {}
}

export type ALBUM_ACTIONS = 
    | LoadAlbums 
    | LoadAlbumsSuccess 
    | NewAlbum 
    | NewAlbumSuccess 
    | UpdateAlbum 
    | DeleteAlbum 
    | AddCommentToAlbum 
    | AlbumError;