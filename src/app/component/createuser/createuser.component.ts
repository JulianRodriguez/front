import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }
  ngOnInit() {
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
    console.log(role);
    event.preventDefault();
    this.userService.adduser(username, password, role, name, phone, email).subscribe(user => {
    });
  }

}
