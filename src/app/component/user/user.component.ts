import {Component, Input, OnInit} from '@angular/core';
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
  pagination: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getTotal().subscribe( total => {
      this.totalUsers = total as unknown as number;
      this.pagination = Math.ceil(this.totalUsers / 10);
      console.log(this.pagination);
    })
    this.userService.getAll(0).subscribe(users => {
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

  getUsersPaginate(page) {
    this.userService.getAll(page).subscribe( users => {
        this.users = users as unknown as Array<User>;
    });
  }


}

