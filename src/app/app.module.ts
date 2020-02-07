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
import { SearchComponent } from './component/search/search.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModifyuserComponent } from './component/modifyuser/modifyuser.component';
import { PhotoSelectorComponent } from './component/photo-selector/photo-selector';
import { QRComponent } from './component/qr/qr.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModifyrestaurantComponent } from './component/modifyrestaurant/modifyrestaurant.component';
import {ModifyproductComponent} from './component/modifyproduct/modifyproduct.component';
import { AccountComponent } from './component/account/account.component';
import { PasswordComponent } from './component/password/password.component';
import { DescripcionRestaurantComponent } from './component/descripcion-restaurant/descripcion-restaurant.component';
import { SuccessComponent } from './component/success/success.component';
import { DescripcionProductoComponent } from './component/descripcion-producto/descripcion-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    AdminComponent,
    UserComponent,
    RestaurantComponent,
    DeleteComponent,
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
    ModifyuserComponent,
    PhotoSelectorComponent,
    QRComponent,
    ModifyrestaurantComponent,
    ModifyproductComponent,
    AccountComponent,
    PasswordComponent,
    DescripcionRestaurantComponent,
    SuccessComponent,
    DescripcionProductoComponent
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
    NgxQRCodeModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

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

