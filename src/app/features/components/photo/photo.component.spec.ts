import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import createSpyObj = jasmine.createSpyObj;
import { PhotoService } from '../../services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { photoMock } from '../../../shared/mocks/photoMock';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let service: PhotoService;

  const mockPhotoService = createSpyObj('PhotoService', ['removePhotoFromFavorite']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: PhotoService, useValue: mockPhotoService
        },
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {data: {photo: photoMock[0]}}}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial photo',  () => {
    expect(component.photo?.id).toEqual('1');
  });

  it('should remove photo',  () => {
    component.removePhotoFromFavorite(photoMock[0]);
    expect(service.removePhotoFromFavorite).toHaveBeenCalled();
  });
});
