import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AdminComponent} from './component/admin/admin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent},
  { path: '**', redirectTo: 'notfound' }
];

export const routing = RouterModule.forRoot(appRoutes);
