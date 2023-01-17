import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../../../features/types/photo';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Output() addToFavorite = new EventEmitter();
  @Input() photo!: Photo;
  @Input() canAddToFavorites: boolean = false;
}
