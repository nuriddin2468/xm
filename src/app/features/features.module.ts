import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
