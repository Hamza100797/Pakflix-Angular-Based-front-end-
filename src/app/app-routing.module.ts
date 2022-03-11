import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './_authGuard/-auth-guard.guard';
import { UserViewComponent } from './_layout/C_users-view/user-view/user-view.component';
import {ScreenViewsComponent} from './_layout/users_Screen-view/screen-views/screen-views.component'

const routes: Routes = [
  {
    path:"",
    component:UserViewComponent,
    children:[
      {
        path:"",
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:"",loadChildren:()=>import("./Modules/user-view/user-view.module").then((m)=>m.UserViewModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of pages & real funcationlity of lazyloading is distrubed.....

      }
    ]
  },
  {
    path:"",
    component:ScreenViewsComponent,
    children:[
      {
        path:"",
        redirectTo:'/userscreen',
        pathMatch:'full'
      },
      {
        path:"",canActivate:[AuthGuard],loadChildren:()=>import("./Modules/users-screen-view/users-screen-view.module").then((m)=>m.UsersScreenViewModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

      }
    ]
  },
  {
    path:"**",component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
