import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  public emailExists = false;
  public userExists = false;
  public myForm: FormGroup;
  public visible = false;

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
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      role: new FormControl('', [
        Validators.required
      ])
    });
    this.myForm.get('username').valueChanges.subscribe(value => {
      console.log(value);
      this.userExists = false;
        this.userService.checkUser(value).subscribe(exists => {
          if (exists) {
            this.userExists = true;
          }
        });
    });
    this.myForm.get('email').valueChanges.subscribe(value => {
      console.log(value);
      this.emailExists = false;
        console.log('No igual');
        this.userService.checkEmail(value).subscribe(exists => {
          if (exists) {
            this.emailExists = true;
          }
        });
    });
  }


  onSubmit() {
    event.preventDefault();
    console.log('ROLE');
    console.log(this.myForm.get('role').value);
    this.userService.adduser(this.myForm.get('username').value, this.myForm.get('password').value, this.myForm.get('role').value, this.myForm.get('nombre').value, this.myForm.get('telefono').value, this.myForm.get('email').value).subscribe(user => {
      this.closeModal();
    });
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
    console.log(role);
    event.preventDefault();
    this.userService.adduser(username, password, role, name, phone, email).subscribe(user => {
      this.closeModal();
    });
  }

}
