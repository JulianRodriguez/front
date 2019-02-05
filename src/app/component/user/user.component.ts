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
  userSelected: User;
  totalUsers: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getTotal().subscribe( total => {
      this.totalUsers = total as unknown as number;
      console.log(this.totalUsers);
    })
    this.userService.getAll().subscribe(users => {
      this.users = users as unknown as Array<User>;
    });
  }
  // adduser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
  //   event.preventDefault();
  //   alert(event);
  //   this.userService.adduser(username, password, role, name, phone, email).subscribe(user => {
  //     console.log(user);
  //   });
  //   console.log('hola');
  // }

  changeUserSelected(userSelected: User) {
    this.userSelected = userSelected;
  }

  page3() {
    this.userService.getAll3().subscribe(users => {
      this.users = users as unknown as Array<User>;
    });
  }
  page2() {
    this.userService.getAll2().subscribe(users => {
      this.users = users as unknown as Array<User>;
    });
  }
  page1(obj) {
    console.log('PRUEBA:');
    console.log(obj);

    this.userService.getAll1().subscribe(users => {
      this.users = users as unknown as Array<User>;
    });
  }


}

