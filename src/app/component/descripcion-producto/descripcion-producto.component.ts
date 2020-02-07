import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.css']
})
export class DescripcionProductoComponent implements OnInit {

  @Input()
  DescriptionProducto: Product;
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
  descriptionProducto(producto: Product) {
    this.DescriptionProducto = producto;
  }

}
