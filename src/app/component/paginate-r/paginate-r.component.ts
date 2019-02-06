import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestaurantService} from '../../service/restaurant.service';

@Component({
  selector: 'app-paginate-r',
  templateUrl: './paginate-r.component.html',
  styleUrls: ['./paginate-r.component.css']
})
export class PaginateRComponent implements OnInit {

  @Output() restaurantPage = new EventEmitter<number>();

  collection = [];
  totalRestaurant: number;
  paginationR: number;

  constructor(private restaurantService: RestaurantService) {

    this.restaurantService.getTotalRestaurant().subscribe( total => {
      this.totalRestaurant = total as unknown as number;
      this.paginationR = Math.ceil(this.totalRestaurant / 10);
      console.log("Esto es");
      console.log(this.totalRestaurant);
    });
  }

  ngOnInit() {
  }

  emitRestaurant(p: number) {
    console.log("Emitido evento 1111");
    this.restaurantPage.emit(p);
  }

}
