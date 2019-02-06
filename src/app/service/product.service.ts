import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Restaurant} from '../model/restaurant.model';
import {User} from '../model/user.model';

@Injectable()
export class ProductService {

  private urlBase = 'http://localhost:8080/';
  private url = 'http://localhost:8080/product';
  private options;
  private isUserLoggedIn;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = {
      headers: headers,
      withCredentials: true
    };
  }

  getAll(page: number) {
    let url = this.url;
    if (page) {
      url += '?page=' + page;
    }
    return this.http.get<Product[]>(url, this.options);
  }

  getByIdRestaurant(id: number) {
    const urlFull = this.urlBase + 'restaurant/' + id + '/product';
    return this.http.get<Product[]>(urlFull, this.options);
  }

  addproduct(name: string, description: string, restaurant: Restaurant) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    console.log('Esto es el restaurante');
    console.log(restaurant);

    return this.http.post<Product>('http://localhost:8080/restaurant/' + restaurant.idRestaurant + '/product', {
      name: name,
      description: description,
    }, this.options);
  }

  deleteproduct(product: Product) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = { headers: headers, body: product,
      withCredentials: true};

    return this.http.delete<Product>('http://localhost:8080/product/' + product.idProduct, this.options);
  }

  getTotal() {
    return this.http.get<number>('http://localhost:8080/product/total', this.options);
  }
}
