import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlbumStoreModule } from './store/album-store.module';
import { ListAlbumComponent } from './components/list-album/list-album.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { AlbumCardComponent } from '../shared/components/album-card/album-card.component';
import { ListAlbumPageComponent } from './containers/list-album-page/list-album-page.component';
import { CreateAlbumPageComponent } from './containers/create-album-page/create-album-page.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateAlbumPageComponent
  },
  {
    path: 'list',
    component: ListAlbumPageComponent
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
    ListAlbumComponent,
    CreateAlbumPageComponent,
    ListAlbumPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AlbumStoreModule,
    AlbumCardComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumModule { }
