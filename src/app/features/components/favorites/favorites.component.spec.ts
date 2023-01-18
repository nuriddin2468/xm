import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import createSpyObj = jasmine.createSpyObj;
import { PhotoService } from '../../services/photo.service';
import { of } from 'rxjs';
import { photoMock } from '../../../shared/mocks/photoMock';
import { Component, Input } from '@angular/core';
import { Photo } from '../../types/photo';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-image',
  template: '',
}) class TestImageComponent {
  @Input() photo!: Photo;
  @Input() mode = '';
}


@Component({
  selector: 'testing-component',
  template: ''
})
class TestingComponent {}

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let service: PhotoService;
  let router: Router;

  const routes: Routes = [
    {
      path: 'photos',
      component: TestingComponent
    },
    {
      path: 'photos/:id',
      component: TestingComponent
    },
    {
      path: 'favorites',
      component: TestingComponent
    }
  ]

  const mockPhotoService = createSpyObj('PhotoService', {
    getFavorites: of(photoMock)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent, TestImageComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        {
          provide: PhotoService, useValue: mockPhotoService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get favorites initially',  () => {
    expect(service.getFavorites).toHaveBeenCalled();
  });

  it('should navigate to photo',  fakeAsync(() => {
    component.navigateToPhoto(photoMock[0]);
    tick();
    expect(router.url).toEqual('/photos/1');
  }));

  it('should return trackby id',  () => {
    expect(component.photoTrackBy(0, photoMock[0])).toEqual('1');
  });
});
