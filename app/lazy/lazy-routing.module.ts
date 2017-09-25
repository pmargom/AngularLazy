import { SharedModule } from './../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LazyComponent
  ],
  exports: [
    RouterModule,
    LazyComponent
  ]
})
export class LazyRoutingModule {}
