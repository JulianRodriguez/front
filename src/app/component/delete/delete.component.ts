import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()
  userToDelete: User;

  public visible = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  onDelete() {
    console.log(this.userToDelete);
     this.userService.deleteuser(this.userToDelete).subscribe( entrada => {
       console.log("Eliminado: " + entrada);
       this.closeModal();
     });

  }

  // onDeleteRestaurant() {
  //   console.log(this.userToDelete);
  //   this.userService.deleteuser(this.userToDelete).subscribe( entrada => {
  //     console.log("Eliminado: " + entrada);
  //   });
  //
  // }

}
