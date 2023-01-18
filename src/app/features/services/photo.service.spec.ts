import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Photo } from '../types/photo';
import { photoMock } from '../../shared/mocks/photoMock';

describe('PhotoServiceService', () => {
  let service: PhotoService;
  let controller: HttpTestingController;
  let store: any = {};

  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PhotoService);
    controller = TestBed.inject(HttpTestingController);

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get photos',    (done)  => {
    const expectedUrl = 'https://picsum.photos/v2/list?page=0&limit=6';
    let actualPhotos: Photo[] | undefined;
    service.getPhotos(0, 6).subscribe(res => {
      actualPhotos = res;
      expect(actualPhotos?.map(res => res.id)).toEqual(photoMock.map(res => res.id));
      done();
    });
    const request = controller.expectOne(expectedUrl);
    request.flush(photoMock);
    controller.verify();
  });

  it('should add photo to favorite',  (done) => {
    const photo = photoMock[0];
    service.addPhotoToFavorite(photo);
    service.getFavorites().subscribe(res => {
      expect(res.length).toBeTruthy();
      expect(res[0].id).toBe(photo.id);
      done();
    });
  });

  it('should add favorite to localstorage', function () {
    const photo = photoMock[0];
    service.addPhotoToFavorite(photo);
    const json = localStorage.getItem('favorites');
    expect(json).toBeTruthy();
    if (!json) return;
    const data = JSON.parse(json);
    expect(data?.length).toBeTruthy();
  });

  it('should remove photo from favorite',  (done) => {
    const photo = photoMock[0];
    service.addPhotoToFavorite(photo);
    service.removePhotoFromFavorite(photo);
    service.getFavorites().subscribe(res => {
      expect(res.length).not.toBeTruthy();
      done();
    });
    expect(localStorage.setItem).toHaveBeenCalled();
  });


});
