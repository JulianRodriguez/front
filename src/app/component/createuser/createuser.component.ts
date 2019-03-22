import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  // @Output() adduser = new EventEmitter()<boolean>();

  constructor(private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string ) {
    // $('#addEmployeeModal').modal('toggle');
    console.log('Estoy aki');
    event.preventDefault();
    this.userService.adduser(username, password, role, name, phone, email).subscribe(user => {
    });
  }

}
