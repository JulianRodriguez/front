import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  public visible = false;
  public myForm: FormGroup;
  @Input()
  userToEdit: User;
  @Output()
  ModalClose = new EventEmitter();

  constructor(private userService: UserService,
              private router: Router,
              private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      role: new FormControl('', [
        Validators.required
      ])
    });
  }
  onSubmit() {
    event.preventDefault();
    this.userService.modifyuser(this.userToEdit, this.myForm.get('username').value, this.myForm.get('role').value, this.myForm.get('nombre').value, this.myForm.get('telefono').value, this.myForm.get('email').value).subscribe(user => {
      this.ModalClose.emit();
      this.closeModal();
    });
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  setUser(user: User) {
    this.userToEdit = user;
    this.myForm.setValue({nombre : user.name, telefono: user.phone, username: user.username, email: user.email, role: user.idRole});
    // this.myForm.setValue({password: user.password, role: user.idRole});
  }

  // modifyuser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
  //   console.log(this.userToEdit);
  //   event.preventDefault();
  //   this.userService.modifyuser(this.userToEdit, username, password, role, name, phone, email).subscribe(user => {
  //     this.ModalClose.emit();
  //     this.closeModal();
  //   });
  // }
}
