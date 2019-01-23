import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Object> {

    const base64Credential: string = btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credential,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers,
      withCredentials: true};

    return this.http.post('http://localhost:8080/login', {
      email: username,
      password: password,
    }, options);

    // return this.http.post('http://localhost:8080/login', {
    //   email: username,
    //   password: password,
    // }, options);
    // return this.http.get('http://localhost:8080/login');
  }
}
