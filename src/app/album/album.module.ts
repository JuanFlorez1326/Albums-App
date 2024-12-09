import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbumComponent } from './components/list-album/list-album.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumModule { }
