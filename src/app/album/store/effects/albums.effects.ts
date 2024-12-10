import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as fromActions from '../actions/album.actions';
import { AlbumService } from '../../services/album.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AlbumEffects {
    
    constructor(
        private router: Router,
        private actions$: Actions,
        private albumService: AlbumService
    ) {}

    loadAlbums$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.AlbumActionTypes.LOAD_ALBUMS),
            mergeMap((action: fromActions.LoadAlbums) => {
                return this.albumService.getAlbums().pipe(
                    map((data: any) => {     
                        return new fromActions.LoadAlbumsSuccess(data);
                    }),
                    catchError((error: any) => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    newAlbum$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.AlbumActionTypes.NEW_ALBUM),
            mergeMap((action: fromActions.NewAlbum) => {
                return this.albumService.createAlbum(action.payload).pipe(
                    map(() => {     
                        this.router.navigate(['/albums/list']);
                        return new fromActions.NewAlbumSuccess(action.payload);
                    }),
                    catchError((error: any) => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    updateAlbum$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.AlbumActionTypes.UPDATE_ALBUM),
            mergeMap((action: fromActions.UpdateAlbum) => {
                return this.albumService.updateAlbum(action.payload).pipe(
                    map(() => {     
                        this.router.navigate(['/albums/list']);
                        return new fromActions.LoadAlbums();
                    }),
                    catchError((error: any) => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    deleteAlbum$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.AlbumActionTypes.DELETE_ALBUM),
            mergeMap((action: fromActions.DeleteAlbum) => {
                return this.albumService.deleteAlbum(action.payload).pipe(
                    map(() => {     
                        return new fromActions.DeleteAlbumSuccess(action.payload);
                    }),
                    catchError((error: any) => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    addComment$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.AlbumActionTypes.ADD_COMMENT_TO_ALBUM),
            mergeMap((action: fromActions.AddCommentToAlbum) => {
                return this.albumService.addCommentToAlbum(action.payload).pipe(
                    map(() => {     
                        return new fromActions.LoadAlbums();
                    }),
                    catchError((error: any) => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    private onError(error: any): Observable<Action> {
        console.log('ERROR: ', error);
        return of(new fromActions.AlbumError({ error }));
    };
}