import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    PhotoListComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
