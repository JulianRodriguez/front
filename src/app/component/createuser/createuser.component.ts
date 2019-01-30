import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit() {
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
    event.preventDefault();
    alert(event);
    this.userService.adduser(username, password, role, name, phone, email).subscribe(user => {
      console.log(user);
    });
    console.log('hola');
  }

}
