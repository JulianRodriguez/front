import {EventEmitter, Injectable, OnChanges, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestaurantService} from './restaurant.service';
import {Restaurant} from '../model/restaurant.model';

@Injectable()
export class SearchService {

  public changed: EventEmitter<any> = new EventEmitter<any>();
  public users: Array<User>;
  public restaurantes: Array<Restaurant>;

  private switcher = Boolean(false);

  constructor(private userService: UserService, private http: HttpClient, private router: Router, private restaurantService: RestaurantService) {}

  search(terms: Observable<string>): Observable<any[]> {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(source => this.searchEntries(source)));
  }

  searchEntries(term): Observable<any[]> {

    const cad = this.router.url;
    //TODO Comprobamos la ruta con if y vamos tirando segun
    console.log(cad);
    // return this.userService.get(undefined, undefined, { freeSearch: term}) as unknown as Observable<Array<User>>;
    if (cad === '/user') {
      console.log('estoy aqui');
      this.userService.get(term).subscribe(users => {
          this.users = users as unknown as Array<User>;
          this.changedFunctionU();
        }
      );
      return this.userService.get(term) as unknown as Observable<Array<User>>;
    } else {
      if (cad === '/restaurant') {
        console.log('estoy en restaurante');
        this.restaurantService.get(term).subscribe(restaurants => {
            this.restaurantes = restaurants as unknown as Array<Restaurant>;
            this.changedFunctionR();
          }
        );
        return this.restaurantService.get(term) as unknown as Observable<Array<Restaurant>>;
      }
    }
    // return this.http.get<User>( this.url + this.query + { freeSearch: term}, this.options)as unknown as Observable<Array<User>>;
  }

  changedFunctionU() {
    if (this.users !== undefined) {
      console.log('vamos por diooooo User');
      this.switcher = Boolean(!this.switcher);
      console.log(this.switcher);
      this.changed.emit(this.switcher);
    }
  }

  changedFunctionR() {
    if (this.restaurantes !== undefined) {
      console.log('vamos por diooooo Restaurante');
      this.switcher = Boolean(!this.switcher);
      console.log(this.switcher);
      this.changed.emit(this.switcher);
    }
  }
}
