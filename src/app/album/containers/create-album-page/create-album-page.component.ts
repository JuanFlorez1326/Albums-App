import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Album } from '../../interfaces/album.interface';
import * as fromTasksActions from '../../store/actions/album.actions';

@Component({
  selector: 'app-create-album-page',
  templateUrl: './create-album-page.component.html',
  styleUrls: ['./create-album-page.component.scss']
})
export class CreateAlbumPageComponent {

  constructor(
    private store: Store<AppState>
  ) {}

  public saveNewTask(album: Album): void {
    this.store.dispatch(new fromTasksActions.NewAlbum(album));
  }
}
