import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePComponent } from './delete-p.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PRODUCT } from 'src/app/tests-module/product-service.mock';

describe('DeletePComponent', () => {
  let component: DeletePComponent;
  let fixture: ComponentFixture<DeletePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePComponent);
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

  it('should delete a product', () => {
    const spy = spyOn(component, 'closeModal');
    component.ProductToDelete = PRODUCT;
    component.onDeleteRestaurant();
    expect(spy).toHaveBeenCalled();
  });

  it('should delete a product', () => {
    component.deleteProduct(PRODUCT);
    expect(component.ProductToDelete).toEqual(PRODUCT);
  });
});