import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Connected} from '../model/connected.model';


@Injectable()
export class UserService {

  private url = 'http://localhost:8080/user';
  private isUserLoggedIn;
  public usserLogged: Connected;
  private options;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};
  }

  setUserLoggedIn(connected: Connected) {
    this.isUserLoggedIn = true;
    this.usserLogged = connected;
    localStorage.setItem('currentUser', JSON.stringify(connected));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getAll() {
    return this.http.get<User[]>(this.url, this.options);
  }

  adduser(username: string, password: string, role: number, name: string, phone: string, email: string) {

    console.log('en el servicio');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    return this.http.post<User>('http://localhost:8080/user', {
      username: username,
      password: password,
      idRole: role,
      name: name,
      email: email,
      phone: phone,
    }, this.options);
    console.log('adios');
  }
  // edituser(password: string, name: string, email: string) {
  //
  //   console.log('editando');
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   this.options = { headers: headers,
  //     withCredentials: true};
  //
  //   return this.http.put<User>('http://localhost:8080/user', {
  //     password: password,
  //     name: name,
  //     email: email,
  //   }, this.options);
  //   console.log('adios');
  // };

  deleteuser(user: User) {
    console.log('en el delete');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = { headers: headers, body: user,
      withCredentials: true};

    return this.http.delete<User>('http://localhost:8080/user/' + user.idUser, this.options);
  }



}

