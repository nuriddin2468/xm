import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhotoComponent } from './components/photo/photo.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PhotoListComponent,
    FavoritesComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class FeaturesModule { }
