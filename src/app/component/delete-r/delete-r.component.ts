import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
// import {UserService} from '../../service/user.service';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';

@Component({
  selector: 'app-delete-r',
  templateUrl: './delete-r.component.html',
  styleUrls: ['./delete-r.component.css']
})
export class DeleteRComponent implements OnInit {

  @Input()
  RestaurantToDelete: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  onDeleteRestaurant() {
    console.log(this.RestaurantToDelete);
    this.restaurantService.deleterestaurant(this.RestaurantToDelete).subscribe( entrada => {
      console.log("Eliminado: " + entrada);
    });

  }

}

