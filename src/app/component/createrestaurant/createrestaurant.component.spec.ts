import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterestaurantComponent } from './createrestaurant.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';
import { USER } from 'src/app/tests-module/user-service.mock';

describe('CreaterestaurantComponent', () => {
  let component: CreaterestaurantComponent;
  let fixture: ComponentFixture<CreaterestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterestaurantComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit element', () => {
    const spy = spyOn(component, 'closeModal');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should get the input length', () => {
    component.onInput('hola');
    expect(component.counter).toBe(4);
  });

  it('should get the input name length', () => {
    component.onInputName('bar lolo');
    expect(component.counterName).toBe(8);
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should create a restaurant', () => {
    component.createRestaurant(USER);
    expect(component.RestaurantTocreate).toEqual(USER);
  });

});
