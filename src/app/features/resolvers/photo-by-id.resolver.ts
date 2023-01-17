import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../types/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoByIdResolver implements Resolve<Photo> {

  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo> {
    const { id } = route.params;
    return this.photoService.getPhotoById(id);
  }
}
