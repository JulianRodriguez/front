import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ModifyrestaurantComponent } from './modifyrestaurant.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';

describe('ModifyrestaurantComponent', () => {
  let component: ModifyrestaurantComponent;
  let fixture: ComponentFixture<ModifyrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyrestaurantComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', fakeAsync(() => {
    (component as any).photoSelector = {
      setPhoto: () => {}
    };
    (component as any).ProductToEdit = {
      photo: ''
    };
    component.openModal();
    tick(600);
    expect(component.visible).toBeTruthy();
  }));

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should submit a product', () => {
    const spy = spyOn(component, 'closeModal');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
