import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Output() userPage = new EventEmitter<number>();

  collection = [];
  totalUsers: number;
  pagination: number;

  constructor( private userService: UserService, private searchService: SearchService) {
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push('Angular'+i);
    // }

    this.userService.getTotal().subscribe(total => {
      this.totalUsers = total as unknown as number;
      this.pagination = Math.ceil(this.totalUsers / 10);
      console.log(this.totalUsers);
    });

  }

  ngOnInit() {
  }

  emitUsers(p: number) {
    console.log("Emitido evento");
    this.userPage.emit(p);
  }
}
