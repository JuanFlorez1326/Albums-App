import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Album } from '../../interfaces/album.interface';
import * as fromAlbumActions from '../../store/actions/album.actions';

@Component({
  selector: 'app-create-album-page',
  templateUrl: './create-album-page.component.html'
})
export class CreateAlbumPageComponent {

  constructor(
    private store: Store<AppState>
  ) {}

  public saveNewAlbum(album: Album): void {
    this.store.dispatch(new fromAlbumActions.NewAlbum(album));
  }
}
