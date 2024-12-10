import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html'
})
export class ListAlbumComponent {
  @Input() albums!: Album[] | null;
  @Input() isLoading!: boolean | null;
}