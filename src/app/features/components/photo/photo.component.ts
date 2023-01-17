import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../types/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {

  photo?: Photo;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    const { photo } = this.route.snapshot.data;
    this.photo = photo;
  }

  removePhotoFromFavorite(photo: Photo) {
    this.photoService.removePhotoFromFavorite(photo);
  }
}
