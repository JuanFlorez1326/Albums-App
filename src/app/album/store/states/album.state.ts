import { EntityState } from "@ngrx/entity";
import { Album } from "../../interfaces/album.interface";

export interface AlbumState extends EntityState<Album> {
    isLoading: boolean;
    success: boolean;
    error: any;
}