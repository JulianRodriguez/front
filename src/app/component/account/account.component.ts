import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public valido = true;
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
        Validators.required,
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
    }, error => {
      console.log(this.valido);
      this.valido = false;
      console.log('Hola valido');
      console.log(this.valido);
      console.log('Hola error ' + error);
    });
  }

}
