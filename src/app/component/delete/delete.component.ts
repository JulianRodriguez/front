import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()
  userToDelete: User;
  @Output()
  ModalClose = new EventEmitter();

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
       this.ModalClose.emit();
       console.log("Eliminado: " + entrada);
       this.closeModal();
     });

  }

  deleteUser(user: User) {
    this.userToDelete = user;
  }

  // onDeleteRestaurant() {
  //   console.log(this.userToDelete);
  //   this.userService.deleteuser(this.userToDelete).subscribe( entrada => {
  //     console.log("Eliminado: " + entrada);
  //   });
  //
  // }

}
