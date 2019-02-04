import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Restaurant} from '../model/restaurant.model';

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

  getAll() {
    return this.http.get<Product[]>(this.url, this.options);
  }

  getByIdRestaurant(id: number) {
    const urlFull = this.urlBase + 'restaurant/' + id + '/product';
    return this.http.get<Product[]>(urlFull, this.options);
  }
}
