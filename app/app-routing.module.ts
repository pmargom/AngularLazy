import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { EagerModule } from './eager/eager.module';

export const ROUTES: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: '**', redirectTo: 'eager' }
];

@NgModule({
  imports: [
    CommonModule,
    EagerModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
