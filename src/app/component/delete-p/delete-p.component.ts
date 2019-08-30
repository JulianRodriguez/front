import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Restaurant} from '../../model/restaurant.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-delete-p',
  templateUrl: './delete-p.component.html',
  styleUrls: ['./delete-p.component.css']
})
export class DeletePComponent implements OnInit {

  @Input()
  ProductToDelete: Product;
  @Output()
  ModalClose = new EventEmitter();

  public visible = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }
  deleteProduct(producto: Product) {
    this.ProductToDelete = producto;
  }

  onDeleteRestaurant() {
    console.log(this.ProductToDelete);
    this.productService.deleteproduct(this.ProductToDelete).subscribe( entrada => {
      this.ModalClose.emit();
      this.closeModal();
    });

  }

}
