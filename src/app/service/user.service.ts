import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Connected} from '../model/connected.model';
import {SearchService} from './search.service';


@Injectable()
export class UserService {

  private url = 'http://localhost:8080/user';
  private isUserLoggedIn;
  public usserLogged: Connected;
  private options;
  private queryForSearch = '?searchName=';
  private queryForPage = '&page=';
  public term;
  private total = 0;

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

    if (!this.term) {
      let url = this.url;
      if (page) {
        url += '?page=' + page;
      }
      return this.http.get<User[]>(url, this.options);
    } else {
      return this.get(this.term, page);
    }
  }

  get(term: string, page?: number) {

    this.term = term;
    if (!page) { page = 0; }

    return this.http.get<User[]>(this.url + this.queryForSearch + term + this.queryForPage + page, this.options);
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

  checkUser(nombre: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};
    return this.http.get<boolean>('http://localhost:8080/user/check?username=' + nombre);
  }

  modifyuser(user: User, username: string, role: number, name: string, phone: string, email: string) {

    console.log('HOLA');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    console.log(user.idRole);
    if (role == 0) {
      role = user.idRole;
    }
    if (username == '') {
      username = null;
    }
    if (phone == '') {
      phone = null;
    }
    if (name == '') {
      name = null;
    }
    if (email == '') {
      email = null;
    }
    console.log('El rol');
    console.log(role);
    return this.http.put<User>('http://localhost:8080/user/' + user.idUser, {
      username: username,
      idRole: role,
      name: name,
      email: email,
      phone: phone,
    }, this.options);
  }

  check(type: string, value: string) {
    console.log('El type es: ');
  console.log(type);
  console.log('El value es: ');
  console.log(value);
    // return this.http.get<boolean>('http://localhost:8080/user/' + type !== 'username' ? 'check_user' : 'check_email' + '?value=' + value);
    return this.http.get<boolean>('http://localhost:8080/user/check_user?value=' + value);

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

  getTotal() {
    return this.http.get<number>('http://localhost:8080/user/total', this.options);
  }

  getSearchTotal() {
    console.log('TÉRMINO');
    console.log(this.term);
    return this.http.get<number>('http://localhost:8080/user/searchTotal?searchName=' + this.term, this.options);
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

