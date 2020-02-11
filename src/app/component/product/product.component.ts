import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Restaurant} from '../../model/restaurant.model';
import {UserService} from '../../service/user.service';
import {RestaurantService} from '../../service/restaurant.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';
import { QRComponent } from '../qr/qr.component';
import { DeletePComponent } from '../delete-p/delete-p.component';
import {ModifyproductComponent} from '../modifyproduct/modifyproduct.component';
import {DescripcionProductoComponent} from '../descripcion-producto/descripcion-producto.component';
import {ActivatedRoute} from '@angular/router';

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


  private idRestaurant;
  @ViewChild('qrModal')
  qrModal: QRComponent;
  @ViewChild(DeletePComponent)
  public deleteProductModal: DeletePComponent;
  @ViewChild(ModifyproductComponent)
  public editProductModal: ModifyproductComponent;
  @ViewChild(DescripcionProductoComponent)
  public descriptionProdModal: DescripcionProductoComponent;

  constructor(private productService: ProductService,
              private restaurantService: RestaurantService,
              private userService: UserService,
              private searchService: SearchService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idRestaurant = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.idRestaurant);
    if (this.idRestaurant === '*') {
      console.log('Estoy en el if');
      this.loadProduct();
    } else {
      console.log('Estoy en el else');
      this.loadProductRestaurant();
    }
  }

  loadProduct() {
    this.searchService.changed.subscribe(() => {
      console.log('Pero aquí no');
      console.log(this.searchService.productos);
      this.products = this.searchService.productos;
    });

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

  loadProductRestaurant() {
    this.searchService.changed.subscribe(() => {
      console.log('Pero aquí no');
      console.log(this.searchService.productos);
      this.products = this.searchService.productos;
    });

    this.productService.getTotalProductoRestaurant(this.idRestaurant).subscribe( total => {
      this.totalProducts = total as unknown as number;
      console.log('Total de productos');
      console.log(this.totalProducts);
      this.pagination = Math.ceil(this.totalProducts / 10);
    })

    this.productService.getByIdRestaurant(this.idRestaurant).subscribe(products => {
      console.log('Los productos del restaurante');
      console.log(products);
      this.products = products as unknown as Array<Product>;
    });
  }

  // loadProduct() {
  //   this.searchService.changed.subscribe(() => {
  //     console.log('Pero aquí no');
  //     console.log(this.searchService.productos);
  //     this.products = this.searchService.productos;
  //   });
  //
  //   this.productService.getTotal().subscribe( total => {
  //     this.totalProducts = total as unknown as number;
  //     this.pagination = Math.ceil(this.totalProducts / 10);
  //   })
  //
  //   const user = this.userService.getUserLoggedIn();
  //   if (user.rolename === 'ADMIN') {
  //     this.productService.getAll(0).subscribe(products => {
  //       this.products = products as unknown as Array<Product>;
  //     });
  //   } else {
  //     this.restaurantService.getByIdUser(user.idUser).subscribe((restaurants) => {
  //       this.products = new Array<Product>();
  //       for (const restaurant of restaurants as unknown as Array<Restaurant>) {
  //         this.productService.getByIdRestaurant(restaurant.idRestaurant).subscribe(products => {
  //           this.products = this.products.concat(products as unknown as Array<Product>);
  //         });
  //       }
  //     });
  //   }
  // }


  changeProductSelected(ProductSelected: Product, modal: string, funcion: string) {
    this.ProductSelected = ProductSelected;
    console.log(modal);
    console.log(funcion);
    this[modal][funcion](ProductSelected);
    this[modal].openModal();
  }

  getProductsPaginate(page) {
    this.productService.getAll(page).subscribe( products => {
      this.products = products as unknown as Array<Product>;
    });
  }



}



