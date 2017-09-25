import { UserService } from './../services/user.service';
import { EagerRoutingModule } from './eager.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    EagerRoutingModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class EagerModule {}
