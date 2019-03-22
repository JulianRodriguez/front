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
import {RestaurantService} from './service/restaurant.service';
import { DeleteComponent } from './component/delete/delete.component';
import { EditComponent } from './component/edit/edit.component';
import { CreateuserComponent } from './component/createuser/createuser.component';
import { DeleteRComponent } from './component/delete-r/delete-r.component';
import { CreaterestaurantComponent } from './component/createrestaurant/createrestaurant.component';
import { ProductComponent } from './component/product/product.component';
import {ProductService} from './service/product.service';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { DeletePComponent } from './component/delete-p/delete-p.component';
import { PaginateComponent } from './component/paginate/paginate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginateRComponent } from './component/paginate-r/paginate-r.component';
import { PaginatePComponent } from './component/paginate-p/paginate-p.component';
import {SearchService} from './service/search.service';
import { SearchComponent } from './search/search.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    AdminComponent,
    UserComponent,
    RestaurantComponent,
    DeleteComponent,
    EditComponent,
    CreateuserComponent,
    DeleteRComponent,
    CreaterestaurantComponent,
    ProductComponent,
    CreateproductComponent,
    DeletePComponent,
    PaginateComponent,
    PaginateRComponent,
    PaginatePComponent,
    SearchComponent,
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
    NgxPaginationModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    LoginService,
    UserService,
    RestaurantService,
    ProductService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

