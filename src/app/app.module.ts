import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewModule } from './Modules/user-view/user-view.module';
import { UserViewComponent } from './_layout/C_users-view/user-view/user-view.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ModelComponent } from './components/model-popUp/model/model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ScreenViewsComponent } from './_layout/users_Screen-view/screen-views/screen-views.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    PagenotfoundComponent,
    ModelComponent,
    ScreenViewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
