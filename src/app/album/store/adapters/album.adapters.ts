import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Album } from '../../interfaces/album.interface';

export const adapter: EntityAdapter<Album> = createEntityAdapter<Album>({
    selectId: x => x.id
});

export const {
    selectAll: selectAlbums
} = adapter.getSelectors();