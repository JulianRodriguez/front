import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {routing} from './app.routing';
import {LoginService} from './service/login.service';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    AdminComponent,
    UserComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoginService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
