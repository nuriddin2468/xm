import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoByIdResolver } from './resolvers/photo-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/photos'
      },
      {
        path: 'photos',
        component: PhotoListComponent
      },
      {
        path: 'photos/:id',
        component: PhotoComponent,
        resolve: {
          photo: PhotoByIdResolver
        }
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
