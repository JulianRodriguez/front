import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoComponent } from './descripcion-producto.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PRODUCT } from 'src/app/tests-module/product-service.mock';

describe('DescripcionProductoComponent', () => {
  let component: DescripcionProductoComponent;
  let fixture: ComponentFixture<DescripcionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should set the description of a product', () => {
    component.descriptionProducto(PRODUCT);
    expect(component.DescriptionProducto).toEqual(PRODUCT);
  });
});
