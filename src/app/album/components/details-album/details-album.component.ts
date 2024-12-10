import { Component, Input, SimpleChanges } from '@angular/core';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.scss']
})
export class DetailsAlbumComponent {

  public isCreateComment: boolean = false;

  @Input() album!: any;
  @Input() isLoading!: boolean | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['album']) {
      console.log(this.album);
    }
  }
}