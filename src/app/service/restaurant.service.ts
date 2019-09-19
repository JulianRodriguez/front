import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import {Restaurant} from '../model/restaurant.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class RestaurantService {

  private urlBase = 'http://localhost:8080/';
  private url = 'http://localhost:8080/restaurant';
  private isUserLoggedIn;
  public usserLogged: User;
  private options;
  public term;
  private queryForSearch = '?searchName=';
  private queryForPage = '&page=';

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = {
      headers: headers,
      withCredentials: true
    };
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  get(term: string, page?: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    this.term = term;
    if (!page) {
      page = 0;
    }

    return this.http.get<Restaurant[]>(this.url + this.queryForSearch + term + this.queryForPage + page, this.options);
  }

  getAll(page: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};
    let url = this.url;
    if (page) {
      url += '?page=' + page;
    }
    return this.http.get<Restaurant[]>(url, this.options);
  }

  getByIdUser(id: number) {
    const urlFull = this.urlBase + 'user/' + id + '/restaurant';
    return this.http.get<Restaurant[]>(urlFull, this.options);
  }

  getByIdUserAndName(id: number, term: string, page?: number) {
    this.term = term;
    if (!page) {
      page = 0;
    }
    const urlFull = this.urlBase + 'user/' + id + '/restaurant' + this.queryForSearch + term;

    return this.http.get<Restaurant[]>(urlFull, this.options);
  }

  deleterestaurant(restaurant: Restaurant) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = {
      headers: headers, body: restaurant,
      withCredentials: true
    };

    return this.http.delete<Restaurant>('http://localhost:8080/restaurant/' + restaurant.idRestaurant, this.options);
  }

  addrestaurant(name: string, description: string, user: User) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = {
      headers: headers,
      withCredentials: true
    };

    return this.http.post<Restaurant>('http://localhost:8080/user/' + user.idUser + '/restaurant', {
      nameRestaurant: name,
      descriptionRestaurant: description,
    }, this.options);
  }

  getTotalRestaurant() {
    return this.http.get<number>('http://localhost:8080/restaurant/total', this.options);
  }

  editUser(restaurant: Restaurant, nameRestaurant: string, descriptionRestaurant: string) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      this.options = { headers: headers,
        withCredentials: true};

      if(nameRestaurant == '') {
        nameRestaurant = null;
      }
      if(descriptionRestaurant == '') {
        descriptionRestaurant = null;
      }

    return this.http.put<User>('http://localhost:8080/restaurant/' + restaurant.idRestaurant, {
          nameRestaurant: nameRestaurant,
          descriptionRestaurant: descriptionRestaurant,
        }, this.options);

  }
}
  //   console.log(user.idRole);
  //   if (role == 0) {
  //     role = user.idRole;
  //   }
  //   if (username == '') {
  //     username = null;
  //   }
  //   if (phone == '') {
  //     phone = null;
  //   }
  //   if (name == '') {
  //     name = null;
  //   }
  //   if (password == '') {
  //     password = null;
  //   }
  //   if (email == '') {
  //     email = null;
  //   }
  //   console.log('El rol');
  //   console.log(role);
  //   return this.http.put<User>('http://localhost:8080/user/' + user.idUser, {
  //     username: username,
  //     password: password,
  //     idRole: role,
  //     name: name,
  //     email: email,
  //     phone: phone,
  //   }, this.options);
  // }


