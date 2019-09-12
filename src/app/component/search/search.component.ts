import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {SearchService} from '../../service/search.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private textSearch$ = new Subject<string>();

  // private users: Observable<Array<User>>;

  constructor(private userService: UserService,
              private searchService: SearchService) {
    this.searchService.search(this.textSearch$).subscribe();
    // .subscribe(results => {
  //     this.users = results;
  //     console.log(results);
  //   });
  }

  ngOnInit() {
  }

}
