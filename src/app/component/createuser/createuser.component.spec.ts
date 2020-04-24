import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserComponent } from './createuser.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';

describe('CreateuserComponent', () => {
  let component: CreateuserComponent;
  let fixture: ComponentFixture<CreateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserComponent);
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

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should create a restaurant', () => {
    const spy = spyOn(component, 'closeModal');
    component.adduser('user', 'pass', 0, 'paco', '654987321', 'paco@gmail.com');
    expect(spy).toHaveBeenCalled();
  });

  it('should exec ngOnInit and user exists', () => {
    component.ngOnInit();
    component.myForm.patchValue({
      username: 'paco1'
    });
    expect(component.userExists).toBeTruthy();
  });

  it('should exec ngOnInit and user exists', () => {
    component.ngOnInit();
    component.myForm.patchValue({
      email: 'paco@gmail.com'
    });
    expect(component.emailExists).toBeTruthy();
  });

});
