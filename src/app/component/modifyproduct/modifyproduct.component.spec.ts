import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ModifyproductComponent } from './modifyproduct.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';

describe('ModifyproductComponent', () => {
  let component: ModifyproductComponent;
  let fixture: ComponentFixture<ModifyproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyproductComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyproductComponent);
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

  it('should set a photo', () => {
    component.photoSelected('photo');
    expect(component.photo).toBe('photo');
  });

  it('should submit a product', () => {
    const spy = spyOn(component, 'closeModal');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
