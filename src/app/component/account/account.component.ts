import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {Connected} from '../../model/connected.model';
import {empty} from 'rxjs';
import {DescripcionRestaurantComponent} from '../descripcion-restaurant/descripcion-restaurant.component';
import {SuccessComponent} from '../success/success.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public valido = true;
  public visible = false;
  public myForm: FormGroup;
  public connect: Connected;
  public passExists = false;
  public passModificada = false;

  @ViewChild(SuccessComponent)
  public successModal: SuccessComponent;

  @Input()
  userToEdit: User;
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
      contrasena1: new FormControl('', [
        Validators.minLength(6)
      ]),
      contrasena2: new FormControl('', [
        Validators.minLength(6)
      ])
    });
    this.connect = this.userService.getUserLoggedIn();
    console.log('fuera');
    this.myForm.setValue({nombre : this.connect.name, telefono: this.connect.phone,
      username: this.connect.username, email: this.connect.email, contrasena1: null, contrasena2: null});
    console.log('fuera222');
    this.myForm.get('contrasena1').valueChanges.subscribe(cambio => {
      console.log('Dentro');
      this.userService.checkPass(this.connect.email, this.myForm.get('contrasena1').value).subscribe(exists => {
        this.passExists = false;
        console.log('Mas Dentro');
        if (exists) {
          console.log('Dentrisimo');
          this.passExists = true;
        }
      });
    });
  }

  onSubmit() {
    event.preventDefault();
    if (this.myForm.get('contrasena1').validator && this.passExists) {
      console.log('Dentro de onsubmit');
      console.log(this.connect.idUser);
      this.successModal.openModal();

      //   this.userService.changePass(this.connect.idUser, this.myForm.get('contrasena2').value).subscribe(cambio => {
      //     // this.passModificada = cambio;
      //     this.passModificada = true;
      //     console.log('Estamos aki dentro');
      //     this.successModal.openModal();
      //   });
      //   if (this.passModificada) {
      //     console.log('Estamos aki');
      //     this.successModal.openModal();
      //     console.log('ya no es');
      //   }
      // }
    }
  }
}
