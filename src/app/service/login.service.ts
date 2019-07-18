import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {Connected} from '../model/connected.model';
import {isNullOrUndefined} from 'util';



@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  isLogged(): Observable<Connected> {
    return this.http.get<Connected>('http://localhost:8080/connection');
  }

  getCurrentUser(): Connected {
    let user = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user)) {
      let user_s: Connected = JSON.parse(user);
      return user_s;
    } else {
      return null;
    }
  }
  login(username: string, password: string): Observable<Connected> {

    const base64Credential: string = btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credential,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers,
      withCredentials: true};

    return this.http.post<Connected>('http://localhost:8080/login', {
      email: username,
      password: password,
    }, options);
  }

}
