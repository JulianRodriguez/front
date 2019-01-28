// import {Injectable} from '@angular/core';
// import {User} from '../model/user.model';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Restaurant} from '../model/restaurant.model';
//
// @Injectable()
// export class RestaurantService {
//
//   private url = 'http://localhost:8080/restaurant';
//   private isUserLoggedIn;
//   public usserLogged: User;
//   private options;
//
//   constructor(private http: HttpClient) {
//     this.isUserLoggedIn = false;
//
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     });
//     this.options = { headers: headers,
//       withCredentials: true};
//   }
//
//   setUserLoggedIn(user: User) {
//     this.isUserLoggedIn = true;
//     this.usserLogged = user;
//     localStorage.setItem('currentUser', JSON.stringify(user));
//   }
//
//   getUserLoggedIn() {
//     return JSON.parse(localStorage.getItem('currentUser'));
//   }
//
//   getAll() {
//     return this.http.get<Restaurant>(this.url, this.options);
//   }
//
// }
