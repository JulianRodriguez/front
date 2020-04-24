import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Restaurant } from '../model/restaurant.model';
import { Product } from '../model/product.model';
import { USER } from './user-service.mock';
import { RESTAURANT } from './restaurant-service.mock';
import { PRODUCT } from './product-service.mock';


@Injectable()
export class SearchServiceMock {

  public users: Array<User> = [USER];
  public restaurantes: Array<Restaurant> = [RESTAURANT];
  public productos: Array<Product> = [PRODUCT];

  public changed: Observable<any> = of();

  constructor() {}

  search(terms: Observable<string>): Observable<any[]> {
    return of([]);
  }

  searchEntries(term): Observable<any[]> {
    return of([]);
  }

  changedFunctionU() {}

  changedFunctionR() {}

  changedFunctionP() {}
}
