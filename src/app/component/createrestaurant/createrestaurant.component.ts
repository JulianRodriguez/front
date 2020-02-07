import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {RestaurantService} from '../../service/restaurant.service';
import {User} from '../../model/user.model';
import {Restaurant} from '../../model/restaurant.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css']
})
export class CreaterestaurantComponent implements OnInit {

  public myForm: FormGroup;
  @Input()
  RestaurantTocreate: User;
  @Input()
  counter: number = 0;
  @Input()
  counterName: number = 0;
  @Output()
  ModalClose = new EventEmitter();

  public visible = false;

  constructor(private restaurantService: RestaurantService,
              private router: Router,
              private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ])
    });
  }
  onInput(value: string) {
    this.counter = value.length;
  }
  onInputName(value: string) {
    this.counterName = value.length;
  }
  onSubmit() {
    event.preventDefault();
    this.restaurantService.addrestaurant(this.myForm.get('nombre').value, this.myForm.get('descripcion').value, this.RestaurantTocreate).subscribe(restaurant => {
      this.closeModal();
    });
  }
  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  createRestaurant(user: User) {
    this.RestaurantTocreate = user;
  }

/*  addrestaurant(name: string, description: string) {
    event.preventDefault();
    this.restaurantService.addrestaurant(name, description, this.RestaurantTocreate).subscribe(restaurant => {
      this.closeModal();
    });
  }*/

}
