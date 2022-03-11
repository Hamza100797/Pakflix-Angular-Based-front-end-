import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';

const routes: Routes = [
  {path:"userscreen",component:UsersScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersScreenViewRoutingModule { }
