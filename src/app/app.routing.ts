import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AdminComponent} from './component/admin/admin.component';
import {RestaurantComponent} from './component/restaurant/restaurant.component';
import {UserComponent} from './component/user/user.component';
import {ProductComponent} from './component/product/product.component';
import {AuthGuard} from './guards/auth.guard';
import {AccountComponent} from './component/account/account.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent},
  { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard] },
  { path: 'restaurant/:id/product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
