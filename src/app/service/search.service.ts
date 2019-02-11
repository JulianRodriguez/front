import {EventEmitter, Injectable, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {

  public terms = '';
  public changed: EventEmitter = new EventEmitter();
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
    this.terms = terms;

    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(source => this.searchEntries(source)));
  }

  searchEntries(term): Array<User> {
    // return this.userService.get(undefined, undefined, { freeSearch: term}) as unknown as Observable<Array<User>>;

    this.userService.get(term).subscribe(users => {
      this.users = users;
      this.changedFunction();
      }
    );
    return this.userService.get(term);

    // return this.http.get<User>( this.url + this.query + { freeSearch: term}, this.options)as unknown as Observable<Array<User>>;
  }

  changedFunction() {
    if (this.users !== undefined) {
      this.changed.emit(true);
    }
  }
}
