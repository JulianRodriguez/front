import { Component, OnInit, ViewChild } from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';
import { CreateproductComponent } from '../createproduct/createproduct.component';
import { DeletePComponent } from '../delete-p/delete-p.component';
import { DeleteRComponent } from '../delete-r/delete-r.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Array<Restaurant>;
  RestaurantSelected: Restaurant;

  @ViewChild(DeleteRComponent)
  public deleteRestaurantModal: DeleteRComponent;

  @ViewChild(CreateproductComponent)
  public createProductModal: CreateproductComponent;

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
  changeRestaurantSelected(RestaurantSelected: Restaurant, modal: string) {
    this.RestaurantSelected = RestaurantSelected;
    this[modal].openModal();
  }

  getRestaurantPaginate(page) {
    this.restaurantService.getAll(page).subscribe( restaurants => {
      this.restaurants = restaurants as unknown as Array<Restaurant>;
    });
  }

}
