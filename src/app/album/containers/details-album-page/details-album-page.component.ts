import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Album } from '../../interfaces/album.interface';
import * as fromActions from '../../../album/store/actions/album.actions';
import * as fromReducers from '../../../album/store/reducers/album.reducers';


@Component({
  selector: 'app-details-album-page',
  templateUrl: './details-album-page.component.html',
  styleUrls: ['./details-album-page.component.scss']
})
export class DetailsAlbumPageComponent {

  public currentAlbum$!: Observable<Album | undefined>;
  public isLoading$!: Observable<boolean>;
  public albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];      
      this.getCharacter(this.albumId);
    });
  }

  public getCharacter(id: number) {
    this.store.dispatch(new fromActions.LoadAlbums());
    this.isLoading$ = this.store.select(fromReducers.selectAlbumsIsLoading);
    this.currentAlbum$ = this.store.select(fromReducers.selectAlbumById(id));
  }
}