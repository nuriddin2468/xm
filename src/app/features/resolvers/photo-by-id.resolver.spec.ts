import { TestBed } from '@angular/core/testing';

import { PhotoByIdResolver } from './photo-by-id.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import createSpyObj = jasmine.createSpyObj;
import { PhotoService } from '../services/photo.service';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('PhotoByIdResolver', () => {
  let resolver: PhotoByIdResolver;
  let service: PhotoService;
  let route: ActivatedRouteSnapshot;
  const mockPhotoService = createSpyObj('PhotoService', ['getPhotoById']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: PhotoService, useValue: mockPhotoService
        }
      ]
    });
    resolver = TestBed.inject(PhotoByIdResolver);
    service = TestBed.inject(PhotoService);
    route = new ActivatedRouteSnapshot();
    route.params = {id: '1'};
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should get photo by id', function () {
    resolver.resolve(route, {url: '', root: route});
    expect(service.getPhotoById).toHaveBeenCalledWith('1');
  });
});
