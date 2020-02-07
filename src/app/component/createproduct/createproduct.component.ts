import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user.model';
import {Restaurant} from '../../model/restaurant.model';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  public myForm: FormGroup;
  @Input()
  ProductTocreate: Restaurant;
  @Input()
  counter: number = 0;
  @Input()
  counterName: number = 0;
  public visible = false;
  public photo: string;

  constructor(private productService: ProductService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    event.preventDefault();
    this.productService.addproduct(this.myForm.get('nombre').value, this.myForm.get('descripcion').value, this.photo, this.ProductTocreate).subscribe(restaurant => {
      console.log(this.ProductTocreate);
      this.closeModal();
    });
  }

  addproduct(name: string, description: string, photo: string) {
    event.preventDefault();
    this.productService.addproduct(name, description, photo, this.ProductTocreate).subscribe(restaurant => {
      console.log(this.ProductTocreate);
      this.closeModal();
    });

  }

  onInput(value: string) {
    this.counter = value.length;
  }
  onInputName(value: string) {
    this.counterName = value.length;
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }
  createProduct(restaurant: Restaurant) {
    this.ProductTocreate = restaurant;
  }

  photoSelected(photo: string): void {
    this.photo = photo;
  }

}
