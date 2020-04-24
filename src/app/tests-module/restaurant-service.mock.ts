import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { USER } from './user-service.mock';
import { Restaurant } from '../model/restaurant.model';

export const RESTAURANT = {
  idRestaurant: 0,
  nameRestaurant: 'nameRestaurant',
  descriptionRestaurant: 'descriptionRestaurant',
  idUser: 0
};

@Injectable()
export class RestaurantServiceMock {

  constructor() {}

  setUserLoggedIn(user: User) {}

  getUserLoggedIn() {
    return USER;
  }

  get(term: string, page?: number) {
    return of([RESTAURANT]);
  }

  getAll(page: number) {
    return of([RESTAURANT]);
  }

  getByIdUser(id: number) {
    return of([RESTAURANT]);
  }

  getByIdUserAndName(id: number, term: string, page?: number) {
    return of([RESTAURANT]);
  }

  deleterestaurant(restaurant: Restaurant) {
    return of(RESTAURANT);
  }

  addrestaurant(name: string, description: string, user: User) {
    return of(RESTAURANT);
  }

  getTotalRestaurant() {
    return of(5);
  }

  editUser(restaurant: Restaurant, nameRestaurant: string, descriptionRestaurant: string) {
    return of(USER);

  }
}



