import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {Restaurant} from '../../model/restaurant.model';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  @Input()
  ProductTocreate: Restaurant;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  addproduct(name: string, description: string) {
    event.preventDefault();
    console.log('Esto es el restaurante')
    console.log(this.ProductTocreate);
    this.productService.addproduct(name, description, this.ProductTocreate).subscribe(restaurant => {
      console.log(this.ProductTocreate);
    });
  }

}
