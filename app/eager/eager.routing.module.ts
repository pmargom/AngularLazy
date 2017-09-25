import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EagerComponent } from './eager.component';

export const ROUTES: Routes = [
  {
    path: 'eager',
    component: EagerComponent
  }
];

@NgModule({
  declarations: [
    EagerComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    EagerComponent
  ]
})
export class EagerRoutingModule {

}
