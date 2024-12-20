import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SidenavComponent
  ]
})
export class SharedModule {}