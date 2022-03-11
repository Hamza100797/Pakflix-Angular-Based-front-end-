import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersScreenViewRoutingModule } from './users-screen-view-routing.module';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';


@NgModule({
  declarations: [
    UsersScreenComponent
  ],
  imports: [
    CommonModule,
    UsersScreenViewRoutingModule
  ]
})
export class UsersScreenViewModule { }
