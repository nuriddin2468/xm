import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ImageComponent } from './image.component';
import { photoMock } from '../../mocks/photoMock';
import { By } from '@angular/platform-browser';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    component.photo = photoMock[0];
  });

  it('should create', () => {
    component.photo = photoMock[0];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not show overlay if no mode given',  () => {
    fixture.detectChanges();
    const overlay = (fixture.debugElement.nativeElement as HTMLElement).querySelector('.overlay');
    expect(overlay).not.toBeTruthy();
  });

  it('should show add to favorite overlay, if mode set as photos ',  fakeAsync(() => {
    component.mode = 'photos';
    fixture.detectChanges();
    const overlay = fixture.debugElement.query(By.css('.overlay'));
    expect(overlay).toBeTruthy();
    expect(overlay.nativeElement.innerText).toEqual('Add to Favorites');
    spyOn(component.addToFavorite, 'emit');
    overlay.triggerEventHandler('click', null);
    tick();
    expect(component.addToFavorite.emit).toHaveBeenCalled();
  }));

  it('should show add to go to photo overlay, if mode set as favorites ',  fakeAsync(() => {
    component.mode = 'favorites';
    fixture.detectChanges();
    const overlay = fixture.debugElement.query(By.css('.overlay'));
    expect(overlay).toBeTruthy();
    expect(overlay.nativeElement.innerText).toEqual('Go to Photo');
    spyOn(component.navigateToPhoto, 'emit');
    overlay.triggerEventHandler('click', null);
    tick();
    expect(component.navigateToPhoto.emit).toHaveBeenCalled();
  }));
});
