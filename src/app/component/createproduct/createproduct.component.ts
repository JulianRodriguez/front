import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user.model';
import {Restaurant} from '../../model/restaurant.model';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  @Input()
  ProductTocreate: Restaurant;
  public visible = false;
  public photo: string;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  addproduct(name: string, description: string, photo: string) {
    event.preventDefault();
    console.log('Esto es el restaurante');
    console.log(this.ProductTocreate);
    console.log(photo);
    this.productService.addproduct(name, description, photo, this.ProductTocreate).subscribe(restaurant => {
      console.log(this.ProductTocreate);
      this.closeModal();
    });

  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  photoSelected(photo: string): void {
    this.photo = photo;
  }

}
