import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Restaurant} from '../../model/restaurant.model';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {PhotoSelectorComponent} from '../photo-selector/photo-selector';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent implements OnInit {

  public myForm: FormGroup;

  @Output()
  ModalClose = new EventEmitter();
  @Input()
  ProductToEdit: Product;
  @ViewChild(PhotoSelectorComponent)
  photoSelector: PhotoSelectorComponent;

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
    // event.preventDefault();
    // this.productService.addproduct(this.myForm.get('nombre').value, this.myForm.get('descripcion').value, this.photo, this.ProductTocreate).subscribe(restaurant => {
    //   console.log(this.ProductTocreate);
    //   this.closeModal();
    // });
  }

  setProduct(producto: Product) {
    this.ProductToEdit = producto;
    this.myForm.setValue({nombre : producto.name, descripcion: producto.description});
  }

  openModal() {
    console.log(this.ProductToEdit);
    this.visible = true;
    setTimeout(() => {
      this.photoSelector.setPhoto(this.ProductToEdit.photo);
    },500);

  }

  closeModal() {
    this.visible = false;
  }

  photoSelected(photo: string): void {
    this.photo = photo;
  }

}
