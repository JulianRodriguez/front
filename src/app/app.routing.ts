import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AdminComponent} from './component/admin/admin.component';
import {RestaurantComponent} from './component/restaurant/restaurant.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent},
  { path: 'restaurant', component: RestaurantComponent},

  { path: '**', redirectTo: 'notfound' }
];

export const routing = RouterModule.forRoot(appRoutes);
