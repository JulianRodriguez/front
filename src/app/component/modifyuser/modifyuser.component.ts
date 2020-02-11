import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  public emailExists = false;
  public userExists = false;
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
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      nombre: new FormControl('', [
        Validators.required
        // Validators.maxLength(40)
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      role: new FormControl('', [
        Validators.required
      ])
    });

    this.myForm.get('username').valueChanges.subscribe(value => {
      console.log(value);
      this.userExists = false;
      if (this.userToEdit.username !== value) {
        this.userService.checkUser(value).subscribe(exists => {
          if (exists) {
            this.userExists = true;
          }
        });
      }
    });
    this.myForm.get('email').valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.userToEdit.email)
      this.emailExists = false;
      if (this.userToEdit.email !== value) {
        console.log('No igual');
        this.userService.checkEmail(value).subscribe(exists => {
          if (exists) {
            this.emailExists = true;
          }
        });
      }
    });
  }
  onSubmit() {
    event.preventDefault();
    this.userService.modifyuser(this.userToEdit, this.myForm.get('username').value, this.myForm.get('role').value, this.myForm.get('nombre').value, this.myForm.get('telefono').value, this.myForm.get('email').value).subscribe(user => {
      this.ModalClose.emit();
      this.closeModal();
    }, error => {
      console.log(this.valido);
      this.valido = false;
      console.log('Hola valido');
      console.log(this.valido);
      console.log('Hola error ' + error);
    });
  }

  // private validateEmailNotTaken(ctrl: AbstractControl) {
  //   const nombre = ctrl.value;
  //   this.userService.checkUser(nombre).subscribe(total => {
  //     console.log(nombre);
  //   });
  //   // console.log(error);
  //   return null;
  // }

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
