import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {Connected} from '../../model/connected.model';
import {PasswordComponent} from '../password/password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(PasswordComponent)
  public editPasswordModal: PasswordComponent;

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      (res: Connected) => {
        // const u: User = {idUser: res.idUser, username: username, rolename: res.rolename};
        // const u: User = {idUser: res.idUser, username: username, rolename: res.rolename};
        const u: Connected = {idUser: res.idUser, username, rolename: res.rolename, password, name: res.name, email: res.email, phone: res.phone};

        // const u: User = {username: username, rolename: res.rolename};
        const role = u.rolename;
        this.userService.setUserLoggedIn(u);
        console.log(u.rolename);
        if (role === 'ADMIN') {
          this.router.navigate(['/user']);
        } else if (role === 'RESTAURANT') {
          this.router.navigate(['/restaurant']);
        }
              // } else if (role === 'USER') {
              //     this.router.navigate(['/restaurant']);
              // }
      },
      error => {
        console.error(error);

      },
      // () => this.navigate()
    );

  }

  navigate() {
    console.log('final');
    this.router.navigate(['/admin']);
  }

  changePassword(modal: string) {
    console.log('Estoy en changePassword');
    this[modal].openModal();
  }
}

