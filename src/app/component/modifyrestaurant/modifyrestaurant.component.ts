import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user.model';
import {RestaurantService} from '../../service/restaurant.service';
import {Router} from '@angular/router';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-modifyrestaurant',
  templateUrl: './modifyrestaurant.component.html',
  styleUrls: ['./modifyrestaurant.component.css']
})
export class ModifyrestaurantComponent implements OnInit {

  public myForm: FormGroup;
  @Input()
  RestaurantToEdit: Restaurant;
  @Output()
  ModalClose = new EventEmitter();
  @Input()
  counter: number = 0;
  @Input()
  counterName: number = 0;

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

  onSubmit() {
    event.preventDefault();
    this.restaurantService.editUser(this.RestaurantToEdit, this.myForm.get('nombre').value, this.myForm.get('descripcion').value).subscribe(restaurant => {
      this.ModalClose.emit();
      console.log('Antes del close');
      this.closeModal();
      console.log('Despues del close');
    });
  }
  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }
  onInput(value: string) {
    this.counter = value.length;
  }
  onInputName(value: string) {
    this.counterName = value.length;
  }

  setRestaurant(restaurant: Restaurant) {
    this.RestaurantToEdit = restaurant;
    this.myForm.setValue({nombre : restaurant.nameRestaurant, descripcion: restaurant.descriptionRestaurant});
  }

  /*  addrestaurant(name: string, description: string) {
      event.preventDefault();
      this.restaurantService.addrestaurant(name, description, this.RestaurantTocreate).subscribe(restaurant => {
        this.closeModal();
      });
    }*/

}
