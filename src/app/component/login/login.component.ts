import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {Connected} from '../../model/connected.model';
import {PasswordComponent} from '../password/password.component';
import {Observable, Subject} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subject = new Subject<any>();
  public variablebloqueo = false;
  login_attempts = 3;
  @ViewChild(PasswordComponent)
  public editPasswordModal: PasswordComponent;

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    // if (this.variablebloqueo) {
    //   (<HTMLInputElement> document.getElementById('username')).disabled = true;
    //   (<HTMLInputElement> document.getElementById('password')).disabled = true;
    // }

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
        console.log('MAL USE');
        this.falloLogin();

      },
      // () => this.navigate()
    );

  }

  falloLogin() {

        if (this.login_attempts === 0) {
          alert('Número de intentos superado');
        } else {
          this.login_attempts = this.login_attempts - 1;
          // Observable.throw('Hola');
          // this.subject.error({ type: 'error', text: 'HOLA' });
          alert('Fallo al loguearte. ' + this.login_attempts + ' veces restantes');
          if (this.login_attempts === 0) {
            (<HTMLInputElement> document.getElementById('username')).disabled = true;
            (<HTMLInputElement> document.getElementById('password')).disabled = true;
            (<HTMLInputElement> document.getElementById('login')).disabled = true;
            this.variablebloqueo = true;
            // document.getElementById('form1').disabled = true;
          }
        }
      return false;
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

