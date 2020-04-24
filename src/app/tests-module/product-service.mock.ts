import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../model/product.model';
import { Restaurant } from '../model/restaurant.model';

export const PRODUCT = {
  idProduct: 0,
  name: 'name',
  description: 'description',
  photo: 'photo',
  nameRestaurant: 0
}

@Injectable()
export class ProductServiceMock {

  constructor() {}

  getAll(page: number) {
    return of([PRODUCT]);
  }

  get(term: string, page?: number) {
    return of([PRODUCT]);
  }

  getByIdRestaurant(id: number) {
    return of([PRODUCT]);
  }

  getByIdRestaurantAndName(id: number, term: string, page?: number) {
    return of([PRODUCT]);
  }

  addproduct(name: string, description: string, photo: string, restaurant: Restaurant) {
    return of(PRODUCT);
  }

  deleteproduct(product: Product) {
    return of(PRODUCT);
  }

  getTotal() {
    return of(5);
  }

  getTotalProductoRestaurant(id: number) {
    return of(5);
  }

  editProd(product: Product, name: string, description: string) {
    return of(PRODUCT);
  }

}
