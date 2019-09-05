import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output()
  ModalClose = new EventEmitter();

  public visible = false;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  deleteRestaurant(restaurant: Restaurant) {
    this.RestaurantToDelete = restaurant;
  }

  onDeleteRestaurant() {
    console.log(this.RestaurantToDelete);
    this.restaurantService.deleterestaurant(this.RestaurantToDelete).subscribe( entrada => {
      this.ModalClose.emit();
      console.log("Eliminado: " + entrada);
      this.closeModal();
    });

  }

}

