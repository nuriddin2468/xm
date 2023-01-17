import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../../../features/types/photo';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Output() addToFavorite = new EventEmitter<Photo>();
  @Output() navigateToPhoto = new EventEmitter<Photo>();
  @Input() photo!: Photo;

  @Input() mode?: 'photos' | 'favorites';
}
