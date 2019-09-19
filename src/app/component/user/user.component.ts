import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {SearchService} from '../../service/search.service';
import { CreateuserComponent } from '../createuser/createuser.component';
import { CreaterestaurantComponent } from '../createrestaurant/createrestaurant.component';
import { ModifyuserComponent } from '../modifyuser/modifyuser.component';
import { DeleteComponent } from '../delete/delete.component';

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

  @ViewChild(CreateuserComponent)
  public createUserModal: CreateuserComponent;

  @ViewChild(CreaterestaurantComponent)
  public createRestaurantModal: CreaterestaurantComponent;

  @ViewChild(ModifyuserComponent)
  public editEmployeeModal: ModifyuserComponent;

  @ViewChild(DeleteComponent)
  public deleteEmployeeModal: DeleteComponent;

  constructor(private userService: UserService,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    // this.userService.getTotal().subscribe( total => {
    //   this.totalUsers = total as unknown as number;
    //   this.pagination = Math.ceil(this.totalUsers / 10);
    //   console.log(this.pagination);
    // });

    this.userService.getAll(0).subscribe(users => {
      this.users = users as unknown as Array<User>;
    });

    this.searchService.changed.subscribe(() => {
      console.log('Pero aquí no');
      console.log(this.searchService.users);
      this.users = this.searchService.users;
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

  openUserModal() {
    this.createUserModal.openModal();
  }

  changeUserSelected(userSelected: User, modal: string, funcion: string) {
    this.userSelected = userSelected;
    this[modal][funcion](userSelected);
    this[modal].openModal();
  }

  getUsersPaginate(page) {
    this.userService.getAll(page).subscribe( users => {
        this.users = users as unknown as Array<User>;
    });
  }


}

