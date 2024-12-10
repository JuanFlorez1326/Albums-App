import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AppState } from '../../ngrx/app.state';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Album } from 'src/app/album/interfaces/album.interface';
import * as fromActions from '../../../album/store/actions/album.actions';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [ 
    CommonModule, 
    SharedModule, 
    RouterModule 
  ],
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {

  public noImg: string = 'https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg';

  @Input() albumsCard!: Album[] | null;
  @Input() isLoadingCard!: boolean | null;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  get filteredAlbums(): Album[] | null {
    return this.albumsCard?.sort((a, b) => +new Date(b.releaseDate) - +new Date(a.releaseDate)) || null;
  }

  public setDefaultImg(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.noImg;
  }

  public editAlbum(id: string) {
    this.router.navigate(['/albums/edit', id]);
  }

  public deleteAlbum(id: string) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '350px',
      data: { 
        title: 'Delete Album',
        message: 'Are you sure you want to delete this album?',
        delete: 'SI, ELIMINAR',
        cancel: 'NO, CANCELAR' 
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {      
      if(result === 'yes') this.store.dispatch(new fromActions.DeleteAlbum(Number(id)));
    });
  }
}