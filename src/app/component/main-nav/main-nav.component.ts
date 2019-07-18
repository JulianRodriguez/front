import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
// @Component({
//   selector: 'app-navigation',
//   templateUrl: './main-nav.component.html',
//   styleUrls: ['./main-nav.component.css'],
//   animations: [
//     trigger('slideInOut', [
//       state('in', style({
//         transform: 'translate3d(0, 0, 0)'
//       })),
//       state('out', style({
//         transform: 'translate3d(100%, 0, 0)'
//       })),
//       transition('in => out', animate('400ms ease-in-out')),
//       transition('out => in', animate('400ms ease-in-out'))
//     ])
//   ]
// })
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private router: Router) {}

  getRole() {
    return this.userService.getUserLoggedIn().rolename;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

  }

}
