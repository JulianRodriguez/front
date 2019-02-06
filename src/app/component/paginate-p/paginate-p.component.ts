import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-paginate-p',
  templateUrl: './paginate-p.component.html',
  styleUrls: ['./paginate-p.component.css']
})
export class PaginatePComponent implements OnInit {

  @Output() productPage = new EventEmitter<number>();

  collection = [];
  totalProduct: number;
  pagination: number;

  constructor(private productService: ProductService) {

    this.productService.getTotal().subscribe( total => {
      this.totalProduct = total as unknown as number;
      this.pagination = Math.ceil(this.totalProduct / 10);
      console.log(this.totalProduct);
    });
  }

  ngOnInit() {
  }

  emitProducts(p: number) {
    console.log("Emitido evento");
    this.productPage.emit(p);
  }

}
