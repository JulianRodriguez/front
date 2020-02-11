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
  private queryForSearch = '?searchName=';
  private queryForPage = '&page=';
  public term;
  public photo: null;

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

  get(term: string, page?: number) {

    this.term = term;
    if (!page) { page = 0; }

    return this.http.get<Product[]>(this.url + this.queryForSearch + term + this.queryForPage + page, this.options);
  }

  getByIdRestaurant(id: number) {
    const urlFull = this.urlBase + 'restaurant/' + id + '/product';
    return this.http.get<Product[]>(urlFull, this.options);
  }

  getByIdRestaurantAndName(id: number, term: string, page?: number) {
    this.term = term;
    if (!page) { page = 0; }
    const urlFull = this.urlBase + 'restaurant/' + id + '/product' + this.queryForSearch + term;
    return this.http.get<Product[]>(urlFull, this.options);
  }

  addproduct(name: string, description: string, photo: string, restaurant: Restaurant) {

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
      photo: photo,
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
  getTotalProductoRestaurant(id: number) {
    return this.http.get<number>('http://localhost:8080/restaurant/' + id + '/product/total', this.options);
  }

  editProd(product: Product, name: string, description: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    if (name == '') {
      name = null;
    }
    if (description == '') {
      description = null;
    }
    this.photo = null;
    console.log(name);
    console.log(description);
    return this.http.put<Product>('http://localhost:8080/product/' + product.idProduct, {
      name: name,
      description: description,
      photo: this.photo,
    }, this.options);

  }

}
