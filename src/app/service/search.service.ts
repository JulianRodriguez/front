import {EventEmitter, Injectable, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {

  public changed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public users: Array<User>;
  private query = '?searchName=';
  private options;
  private url: 'http://localhost:8080/user/';

  constructor(private userService: UserService, private http: HttpClient) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};
  }

  search(terms: Observable<string>): Observable<Array<User>> {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(source => this.searchEntries(source)));
  }

  searchEntries(term): Observable<Array<User>> {
    // return this.userService.get(undefined, undefined, { freeSearch: term}) as unknown as Observable<Array<User>>;

    this.userService.get(term).subscribe(users => {
      this.users = users as unknown as Array<User>;
      this.changedFunction();
      }
    );
    return this.userService.get(term) as unknown as Observable<Array<User>>;

    // return this.http.get<User>( this.url + this.query + { freeSearch: term}, this.options)as unknown as Observable<Array<User>>;
  }

  changedFunction() {
    if (this.users !== undefined) {
      this.changed.emit(true);
    }
  }
}