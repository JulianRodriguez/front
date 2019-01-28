import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
        const u: User = {username: username, rolename: res.rolename};
        // const u: User = {username: username, rolename: res.rolename};
        const role = u.rolename;
        this.userService.setUserLoggedIn(u);
        if (role === 'ADMIN') {
          console.log(1);
          this.router.navigate(['/user']);
        } else if (role === 'RESTAURANT') {
                console.log(2);
                this.router.navigate(['/restaurant']);
              }
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
}

