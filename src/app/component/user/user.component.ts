import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users as unknown as Array<User>;
      console.log(users);
    });
  }
}
