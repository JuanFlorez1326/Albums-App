import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {
    this.getAlbums();
  }

  public getAlbums(): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums`;
    return this.http.get<any>(completedUrl);
  }

  public getAlbumById( albumId: number ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${albumId}`;
    return this.http.get<any>(completedUrl);
  }

  public createAlbum( album: Album ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums`;
    const { id, ...newAlbum } = album;
    return this.http.post<any>(completedUrl, newAlbum);
  }

  public updateAlbum( album: Album ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${album.id}`;
    return this.http.put<any>(completedUrl, album);
  }

  public deleteAlbum( albumId: number ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${albumId}`;
    return this.http.delete<any>(completedUrl);
  }

  public addCommentToAlbum( album: Album): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${album.id}/comments`;
    return this.http.post<any>(completedUrl, album);
  }
}