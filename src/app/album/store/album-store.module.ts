import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { AlbumEffects } from './effects/albums.effects';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([AlbumEffects])
  ]
})
export class AlbumStoreModule {}