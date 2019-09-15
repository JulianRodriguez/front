import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-descripcion-restaurant',
  templateUrl: './descripcion-restaurant.component.html',
  styleUrls: ['./descripcion-restaurant.component.css']
})
export class DescripcionRestaurantComponent implements OnInit {

  @Input()
  DescriptionRestaurant: Restaurant;
  @Output()
  ModalClose = new EventEmitter();

  public visible = false;


  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }
  descriptionRestaurant(restaurant: Restaurant) {
    this.DescriptionRestaurant = restaurant;
  }

}
