import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Album } from '../../interfaces/album.interface';
import * as fromActions from '../../store/actions/album.actions';
import * as fromReducers from '../../store/reducers/album.reducers';

@Component({
  selector: 'app-list-album-page',
  templateUrl: './list-album-page.component.html'
})
export class ListAlbumPageComponent {

  public albums$!: Observable<Album[]>;
  public isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromActions.LoadAlbums());
    this.albums$ = this.store.select(fromReducers.selectAlbum);
    this.isLoading$ = this.store.select(fromReducers.selectAlbumsIsLoading);
  }
}