import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from '../types/photo';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { random } from '../../shared/utils/random';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private endpoint = 'https://picsum.photos';

  private favorites$ = new BehaviorSubject<Photo[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(page = 1, limit = 20): Observable<Photo[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<Photo[]>(`${this.endpoint}/v2/list`, { params })
      .pipe(delay(random(200, 300)));
  }

  getFavorites(): Observable<Photo[]> {
    return this.favorites$.asObservable();
  }

  getPhotoById(id: string): Observable<Photo> {
   return this.http.get<Photo>(`${this.endpoint}/id/${id}/info`);
  }

  addPhotoToFavorite(photo: Photo): void {
    const favorites = this.favorites$.getValue();
    if (favorites.findIndex(item => item.id === photo.id) !== -1) return;
    this.favorites$.next([...favorites, photo]);
  }

  removePhotoFromFavorite(photo: Photo): void {
    const favorites = this.favorites$.getValue();
    this.favorites$.next(favorites.filter(favorite => favorite.id !== photo.id));
  }


}
