import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';
import {PaginationControlsComponent} from 'ngx-pagination';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Output() userPage = new EventEmitter<number>();

  miElemento;
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

    searchService.changed.subscribe(() => {
      console.log('cambiamos');
      this.updatePaginate();
    });
  }

  updatePaginate() {

    this.userService.getSearchTotal().subscribe(total => {
      console.log('estoy aki');
      console.log(total);
      this.totalUsers = total as unknown as number;
      this.pagination = Math.ceil(this.totalUsers / 10);
      console.log(this.pagination);

      this.searchService.changed.subscribe(() => {
        console.log('cambiamos');
        this.updatePaginate();
      });
    });

    this.emitUsers(0);
  }

  ngOnInit() {
  }

  emitUsers(p: number, miElemento?) {

    if (miElemento) {this.miElemento = miElemento; }

    this.userPage.emit(p);

    if (miElemento) {
      this.miElemento.pageChange.emit(p);
    }
  }
}
