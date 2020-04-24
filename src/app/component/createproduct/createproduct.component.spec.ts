import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductComponent } from './createproduct.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';
import { RESTAURANT } from 'src/app/tests-module/restaurant-service.mock';

describe('CreateproductComponent', () => {
  let component: CreateproductComponent;
  let fixture: ComponentFixture<CreateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateproductComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproductComponent);
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

  it('should add a restaurant', () => {
    const spy = spyOn(component, 'closeModal');
    component.addproduct('name', 'description', 'photo');
    expect(spy).toHaveBeenCalled();
  });

  it('should get the input length', () => {
    component.onInput('hola');
    expect(component.counter).toBe(4);
  });

  it('should get the input name length', () => {
    component.onInputName('pan');
    expect(component.counterName).toBe(3);
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should create a product', () => {
    component.createProduct(RESTAURANT);
    expect(component.ProductTocreate).toEqual(RESTAURANT);
  });

  it('should set a photo', () => {
    component.photoSelected('photo');
    expect(component.photo).toBe('photo');
  });
});
