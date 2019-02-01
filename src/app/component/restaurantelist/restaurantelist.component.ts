import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-restaurantelist',
  templateUrl: './restaurantelist.component.html',
  styleUrls: ['./restaurantelist.component.css']
})

export class RestaurantelistComponent implements OnInit {

  @Input()
  RestaurantToDelete: Restaurant;

  restaurants: Array<Restaurant>;
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



}
