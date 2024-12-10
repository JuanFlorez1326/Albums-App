import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../interfaces/album.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {}

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
    return this.http.post<any>(completedUrl, album);
  }

  public updateAlbum( album: Album ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${album.id}`;
    const { id, ...editAlbum } = album;
    return this.http.put<any>(completedUrl, editAlbum);
  }

  public deleteAlbum( albumId: number ): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${albumId}`;
    return this.http.delete<any>(completedUrl);
  }

  public addCommentToAlbum( comment: any): Observable<any> {
    const completedUrl = `${this.baseUrl}/albums/${comment.id}/comments`;
    const { id, ...newComment } = comment;
    return this.http.post<any>(completedUrl, newComment);
  }
}