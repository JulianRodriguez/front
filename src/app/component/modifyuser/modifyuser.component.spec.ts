import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ModifyuserComponent } from './modifyuser.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';
import { UserService } from 'src/app/service/user.service';
import { throwError } from 'rxjs';

describe('ModifyuserComponent', () => {
  let component: ModifyuserComponent;
  let fixture: ComponentFixture<ModifyuserComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyuserComponent, PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyuserComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exec ngOnInit and user exists', () => {
    (component as any).userToEdit = {
      username: 'paco'
    };
    component.ngOnInit();
    component.myForm.patchValue({
      username: 'paco1'
    });
    expect(component.userExists).toBeTruthy();
  });

  it('should exec ngOnInit and user exists', () => {
    (component as any).userToEdit = {
      email: 'paco1@gmail.com'
    };
    component.ngOnInit();
    component.myForm.patchValue({
      email: 'paco@gmail.com'
    });
    expect(component.emailExists).toBeTruthy();
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should submit a user', () => {
    const spy = spyOn(component, 'closeModal');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should fail submitting a user', () => {
    spyOn(userService, 'modifyuser').and.returnValue(throwError(''));
    component.onSubmit();
    expect(component.valido).toBeFalsy();
  });
});
