import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  public emailExists = false;
  public visible = false;
  public valido = false;
  public myForm: FormGroup;
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
      ])
    });
  }
  onSubmit() {
    event.preventDefault();
    this.userService.generatePass(this.myForm.get('email').value).subscribe(valido => {
      this.valido = true;
      this.ModalClose.emit();
      this.closeModal();
    }, error => {
      console.log('error');
      this.valido = false;
    });

  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

}
