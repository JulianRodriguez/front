import { Component, OnInit, ViewChild } from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {RestaurantService} from '../../service/restaurant.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {SearchService} from '../../service/search.service';
import { CreateproductComponent } from '../createproduct/createproduct.component';
import { DeletePComponent } from '../delete-p/delete-p.component';
import { DeleteRComponent } from '../delete-r/delete-r.component';
import {ModifyrestaurantComponent} from '../modifyrestaurant/modifyrestaurant.component';
import {DescripcionRestaurantComponent} from '../descripcion-restaurant/descripcion-restaurant.component';

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

  @ViewChild(ModifyrestaurantComponent)
  public editRestaurantModal: ModifyrestaurantComponent;

  @ViewChild(CreateproductComponent)
  public createProductModal: CreateproductComponent;

  @ViewChild(DescripcionRestaurantComponent)
  public descriptionModal: DescripcionRestaurantComponent;

  constructor(private restaurantService: RestaurantService,
              private userService: UserService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.loadRestaurant();
  }

  loadRestaurant() {
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
  changeRestaurantSelected(RestaurantSelected: Restaurant, modal: string, funcion: string) {
    this.RestaurantSelected = RestaurantSelected;
    console.log(modal);
    console.log(funcion);
    this[modal][funcion](RestaurantSelected);
    this[modal].openModal();
  }

  getRestaurantPaginate(page) {
    this.restaurantService.getAll(page).subscribe( restaurants => {
      this.restaurants = restaurants as unknown as Array<Restaurant>;
    });
  }

}
