import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import createSpyObj = jasmine.createSpyObj;
import { PhotoService } from '../../services/photo.service';
import { Component, Input } from '@angular/core';
import { Photo } from '../../types/photo';
import { of } from 'rxjs';
import { photoMock } from '../../../shared/mocks/photoMock';


@Component({
  selector: 'app-infinite-scroll-container',
  template: '<ng-content></ng-content>',
}) class TestComponent {}

@Component({
  selector: 'app-image',
  template: '',
}) class TestImageComponent {
  @Input() photo!: Photo;
  @Input() mode = '';
}

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoService;

  const mockPhotoService = createSpyObj('PhotoService', {
    getPhotos: of(photoMock),
    addPhotoToFavorite: function (photo: Photo) {}
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhotoListComponent,
        TestComponent,
        TestImageComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: PhotoService, useValue: mockPhotoService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initial page = 0',  () => {
    expect(component['page']).toEqual(0);
  });

  it('should fetch and add to photos',  () => {
    expect(component.photos.length).toEqual(0);
    component.fetchPhotos();
    expect(service.getPhotos).toHaveBeenCalledWith(1);
    expect(component.photos.length).toEqual(6);
    component.fetchPhotos();
    expect(component.photos.length).toEqual(12);
  });

  it('should add to favorite',  () => {
    component.addToFavorite(photoMock[0]);
    expect(service.addPhotoToFavorite).toHaveBeenCalled();
  });
});
