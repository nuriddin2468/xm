import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'photos'
      },
      {
        path: 'photos',
        component: PhotoListComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
