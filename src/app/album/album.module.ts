import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { ListAlbumComponent } from './components/list-album/list-album.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateAlbumComponent
  },
  {
    path: 'list',
    component: ListAlbumComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'create',
  }
];

@NgModule({
  declarations: [
    CreateAlbumComponent,
    ListAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumModule { }
