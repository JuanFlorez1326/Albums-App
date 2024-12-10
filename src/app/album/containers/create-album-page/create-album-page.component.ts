import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Album } from '../../interfaces/album.interface';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromAlbumActions from '../../store/actions/album.actions';
import * as fromAlbumReducers from '../../store/reducers/album.reducers';

@Component({
  selector: 'app-create-album-page',
  templateUrl: './create-album-page.component.html'
})
export class CreateAlbumPageComponent {

  public currentAlbum$!: Observable<Album | undefined>;
  public isLoading$!: Observable<boolean>;
  public albumId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];      
      this.getAlbumId(this.albumId);
    });
  }

  public saveNewAlbum(album: Album): void {
    this.store.dispatch(new fromAlbumActions.NewAlbum(album));
  }

  public saveEditAlbum(album: any): void {
    this.store.dispatch(new fromAlbumActions.UpdateAlbum(album));
  }

  public getAlbumId(albumId: number): void {
    this.store.dispatch(new fromAlbumActions.LoadAlbums());
    this.isLoading$ = this.store.select(fromAlbumReducers.selectAlbumsIsLoading);
    this.currentAlbum$ = this.store.select(fromAlbumReducers.selectAlbumById(albumId));
    console.log(this.albumId);
  }
}