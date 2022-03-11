import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { SiginComponent } from './pages/sigin/sigin.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent, pathMatch: 'full' },
  { path: 'sigin', component: SiginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  {path:'',  redirectTo: 'home',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserViewRoutingModule {}
