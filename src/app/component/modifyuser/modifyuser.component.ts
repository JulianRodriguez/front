import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  @Input()
  userToModify: User;
  constructor(private userService: UserService,
              private router: Router) { }
  ngOnInit() {
  }
  modifyuser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
    console.log(this.userToModify);
    event.preventDefault();
    this.userService.modifyuser(this.userToModify, username, password, role, name, phone, email).subscribe(user => {
    });
  }
}
