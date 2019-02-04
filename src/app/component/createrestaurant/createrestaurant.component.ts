import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {RestaurantService} from '../../service/restaurant.service';
import {User} from '../../model/user.model';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css']
})
export class CreaterestaurantComponent implements OnInit {

  @Input()
  RestaurantTocreate: User;

  constructor(private restaurantService: RestaurantService,
              private router: Router) { }
  ngOnInit() {
  }

  addrestaurant(name: string, description: string) {
    event.preventDefault();
    alert(event);
    console.log(this.RestaurantTocreate);
    this.restaurantService.addrestaurant(name, description, this.RestaurantTocreate).subscribe(restaurant => {
      console.log('LA ID ES');
      console.log(this.RestaurantTocreate);
    });
    console.log('adios');
  }

}
