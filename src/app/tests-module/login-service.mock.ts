import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Connected } from '../model/connected.model';

export const CONNECTED = {
  idUser: 0,
  username: 'username',
  password: 'password',
  rolename: 'rolename',
  name: 'name',
  email: 'email',
  phone: 'phone',
};


@Injectable()
export class LoginServiceMock {

  constructor() {}

  isLogged(): Observable<any> {
    return of(CONNECTED);
  }

  getCurrentUser(): Connected {
    return CONNECTED;
  }

  login(username: string, password: string): Observable<Connected> {
    return of(CONNECTED);
  }
}
