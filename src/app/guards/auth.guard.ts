import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService} from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate() {
    if (this.loginService.getCurrentUser()) {
      console.log(1);
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log(2);
      return false;
    }
  }
}
