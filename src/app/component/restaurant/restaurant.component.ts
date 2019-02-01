import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Array<Restaurant>;
  RestaurantSelected: Restaurant;

  constructor(private restaurantService: RestaurantService,
              private userService: UserService) { }

  ngOnInit() {
    const user = this.userService.getUserLoggedIn();

    if (user.rolename === 'ADMIN') {
      this.restaurantService.getAll().subscribe(restaurants => {
        this.restaurants = restaurants as unknown as Array<Restaurant>;
        console.log(restaurants);
      });
    } else {
      console.log(user);
      this.restaurantService.getByIdUser(user.idUser).subscribe(restaurants => {
        this.restaurants = restaurants as unknown as Array<Restaurant>;
        console.log(restaurants);
      });
    }
  }
  changeRestaurantSelected(RestaurantSelected: Restaurant) {
    this.RestaurantSelected = RestaurantSelected;
  }

}
