import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { InfiniteScrollContainerComponent } from './components/infinite-scroll-container/infinite-scroll-container.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfiniteScrollContainerComponent
  ],
  exports: [
    HeaderComponent,
    InfiniteScrollContainerComponent
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
