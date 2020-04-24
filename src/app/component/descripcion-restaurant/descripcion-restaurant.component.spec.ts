import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionRestaurantComponent } from './descripcion-restaurant.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { RESTAURANT } from 'src/app/tests-module/restaurant-service.mock';

describe('DescripcionRestaurantComponent', () => {
  let component: DescripcionRestaurantComponent;
  let fixture: ComponentFixture<DescripcionRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionRestaurantComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionRestaurantComponent);
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

  it('should set the description of a restaurant', () => {
    component.descriptionRestaurant(RESTAURANT);
    expect(component.DescriptionRestaurant).toEqual(RESTAURANT);
  });
});
