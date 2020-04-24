import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComponent } from './password.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordComponent);
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
});
