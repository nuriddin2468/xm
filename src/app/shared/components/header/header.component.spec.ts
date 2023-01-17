import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';


@Component({
  selector: 'testing-component',
  template: ''
})
class TestingComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let buttons: NodeListOf<HTMLElement>;
  const routes: Routes = [
    {
      path: 'photos',
      component: TestingComponent
    },
    {
      path: 'favorites',
      component: TestingComponent
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatButtonModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    buttons = (fixture.debugElement.nativeElement as HTMLElement).querySelectorAll('a');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should header have 2 buttons',  () => {
    expect(buttons.length).toEqual(2);
  });

  it('should navigate to photos',  fakeAsync(() => {
    const photosButton = buttons.item(0);
    photosButton.click();
    tick();
    expect(router.url).toEqual('/photos');
  }));
  it('should navigate to favorites',  fakeAsync(() => {
    const favoritesButton = buttons.item(1);
    favoritesButton.click();
    tick();
    expect(router.url).toEqual('/favorites');
  }));
});
