import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { InfiniteScrollContainerComponent } from './components/infinite-scroll-container/infinite-scroll-container.component';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfiniteScrollContainerComponent,
    ImageComponent
  ],
    exports: [
        HeaderComponent,
        InfiniteScrollContainerComponent,
        ImageComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ]
})
export class SharedModule { }
