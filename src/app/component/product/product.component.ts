import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Restaurant} from '../../model/restaurant.model';
import {UserService} from '../../service/user.service';
import {RestaurantService} from '../../service/restaurant.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product>;
  ProductSelected: Product;
  totalProducts: number;
  pagination: number;

  constructor(private productService: ProductService,
              private restaurantService: RestaurantService,
              private userService: UserService) { }

  ngOnInit() {

    this.productService.getTotal().subscribe( total => {
      this.totalProducts = total as unknown as number;
      this.pagination = Math.ceil(this.totalProducts / 10);
    })

    const user = this.userService.getUserLoggedIn();
    if (user.rolename === 'ADMIN') {
      this.productService.getAll(0).subscribe(products => {
        this.products = products as unknown as Array<Product>;
      });
    } else {
      this.restaurantService.getByIdUser(user.idUser).subscribe((restaurants) => {
        this.products = new Array<Product>();
        for (const restaurant of restaurants as unknown as Array<Restaurant>) {
          this.productService.getByIdRestaurant(restaurant.idRestaurant).subscribe(products => {
            this.products = this.products.concat(products as unknown as Array<Product>);
          });
        }
      });
    }
  }

  changeProductSelected(ProductSelected: Product) {
    this.ProductSelected = ProductSelected;
  }

  getProductsPaginate(page) {
    this.productService.getAll(page).subscribe( products => {
      this.products = products as unknown as Array<Product>;
    });
  }



}



