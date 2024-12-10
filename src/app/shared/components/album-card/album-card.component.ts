import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { Album } from 'src/app/album/interfaces/album.interface';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [ CommonModule, SharedModule ],
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {

  @Input() albumsCard!: Album[] | null;
  @Input() isLoadingCard!: boolean | null;

  public noImg: string = 'https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg';

  public setDefaultImg(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.noImg;
  }

  get filteredAlbums(): Album[] | null {
    return this.albumsCard?.sort((a, b) => +new Date(b.releaseDate) - +new Date(a.releaseDate)) || null;
  }
}