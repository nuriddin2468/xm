import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../types/photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {

  photos$ = this.photoService.getFavorites();

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) { }

  navigateToPhoto(photo: Photo) {
    this.router.navigate(['/photos', photo.id])
  }
}
