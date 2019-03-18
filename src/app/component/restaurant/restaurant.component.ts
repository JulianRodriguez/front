import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Array<Restaurant>;
  RestaurantSelected: Restaurant;

  constructor(private restaurantService: RestaurantService,
              private userService: UserService,
              private searchService: SearchService) { }

  ngOnInit() {

    this.searchService.changed.subscribe(() => {
      console.log('Pero aquí no Restaurante');
      console.log(this.searchService.restaurantes);
      this.restaurants = this.searchService.restaurantes;
    });

    const user = this.userService.getUserLoggedIn();

    if (user.rolename === 'ADMIN') {
      this.restaurantService.getAll(0).subscribe(restaurants => {
        this.restaurants = restaurants as unknown as Array<Restaurant>;
      });
    } else {
      this.restaurantService.getByIdUser(user.idUser).subscribe(restaurants => {
        this.restaurants = restaurants as unknown as Array<Restaurant>;
      });
    }
  }
  changeRestaurantSelected(RestaurantSelected: Restaurant) {
    this.RestaurantSelected = RestaurantSelected;
  }

  getRestaurantPaginate(page) {
    this.restaurantService.getAll(page).subscribe( restaurants => {
      this.restaurants = restaurants as unknown as Array<Restaurant>;
    });
  }

}
