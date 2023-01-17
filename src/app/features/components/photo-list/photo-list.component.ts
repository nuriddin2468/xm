import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../types/photo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent implements OnDestroy {
  photos: Photo[] = [];
  private page = 0;
  private subscription?: Subscription

  constructor(
    private photoService: PhotoService,
    private cdr: ChangeDetectorRef
  ) { }

  fetchPhotos(): void {
    this.page++;
    this.subscription = this.photoService.getPhotos(this.page).subscribe(photos => {
      this.photos = [...this.photos, ...photos];
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  addToFavorite(photo: Photo) {
    this.photoService.addPhotoToFavorite(photo);
  }
}
