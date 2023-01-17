import { TestBed } from '@angular/core/testing';

import { PhotoByIdResolver } from './photo-by-id.resolver';

describe('PhotoByIdResolver', () => {
  let resolver: PhotoByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhotoByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
