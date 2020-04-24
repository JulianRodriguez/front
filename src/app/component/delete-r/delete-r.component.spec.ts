import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRComponent } from './delete-r.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PRODUCT } from 'src/app/tests-module/product-service.mock';
import { RESTAURANT } from 'src/app/tests-module/restaurant-service.mock';

describe('DeleteRComponent', () => {
  let component: DeleteRComponent;
  let fixture: ComponentFixture<DeleteRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRComponent);
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

  it('should delete a restaurant', () => {
    const spy = spyOn(component, 'closeModal');
    component.RestaurantToDelete = RESTAURANT;
    component.onDeleteRestaurant();
    expect(spy).toHaveBeenCalled();
  });

  it('should delete a restaurant', () => {
    component.deleteRestaurant(RESTAURANT);
    expect(component.RestaurantToDelete).toEqual(RESTAURANT);
  });
});