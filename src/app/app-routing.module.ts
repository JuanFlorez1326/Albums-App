import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'albums',
    loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'albums'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
