import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Connected } from '../model/connected.model';
import { CONNECTED } from './login-service.mock';
import { User } from '../model/user.model';

export const USER = {
  username: 'username',
  idUser: 0,
  name: 'name',
  email: 'email',
  phone: 'phone',
  password: 'password',
  idRole: 0
};

@Injectable()
export class UserServiceMock {

  constructor() { }

  setUserLoggedIn(connected: Connected) {}

  getUserLoggedIn(): Connected {
    return CONNECTED;
  }

  getAll(page: number): Observable<any> {
    return of([USER]);
  }

  get(term: string, page?: number) {
    return  of(USER);
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string) {
    return of(USER);
  }

  modifyuser(user: User, username: string, role: number, name: string, phone: string, email: string) {
    return of(USER);
  }

  generatePass(email: string) {
    return of(true);
  }

  checkUser(value: string) {
    return of(true);
  }

  checkPass(email: string, password: string) {
    return of(true);
  }

  checkEmail(value: string) {
    return of(true);

  }
  changePass(idUser: number, password: string) {
    return of(true);
  }

  getUser(id: number): Observable<User> {
    return of(USER);
  }

  deleteuser(user: User): Observable<User> {
    return of(USER);
  }

  getTotal(): Observable<Number> {
    return of(5);
  }

  getSearchTotal(): Observable<Number> {
    return of(5);
  }
}
