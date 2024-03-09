import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs';
import {Albums} from "../../models/albums";


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {
  }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.url);
  }

  getAlbum(id: number): Observable<Albums> {
    return this.http.get<Albums>(`${this.url}/${id}`);
  }

  addAlbum(body: any): Observable<Albums> {
    return this.http.post<Albums>(this.url, body);
  }

  deleteAlbum(id: number): Observable<Albums> {
    return this.http.delete<Albums>(`${this.url}/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put(`${this.url}/${id}`, {title: newTitle})
      .pipe(catchError((error) => throwError(error)));
  }

  // getPhotos(id: number): Observable<IPhotos[]> {
  //   return this.http.get<IPhotos[]>(`url/${id}/photos`);
  // }
}
