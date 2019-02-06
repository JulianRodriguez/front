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

  getUserLoggedIn(): Connected {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getAll(page: number) {
    let url = this.url;
    if (page) {
      url += '?page=' + page;
    }
    return this.http.get<User[]>(url, this.options);
  }

  getTotal() {
    return this.http.get<number>('http://localhost:8080/user/total', this.options);
  }



  adduser(username: string, password: string, role: number, name: string, phone: string, email: string) {

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
  }

  getUser(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = { headers: headers,
      withCredentials: true};

    return this.http.get<User>('http://localhost:8080/user/' + id, this.options);
  }

  deleteuser(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = { headers: headers, body: user,
      withCredentials: true};

    return this.http.delete<User>('http://localhost:8080/user/' + user.idUser, this.options);
  }

  // pages2() {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //
  //   this.options = { headers: headers,
  //     withCredentials: true};
  //
  //   return this.http.get<User[]>('http://localhost:8080/user?page=2', this.options);
  // }




}

