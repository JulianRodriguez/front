import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { PasswordComponent } from '../password/password.component';
import { LoginService } from 'src/app/service/login.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, PasswordComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do login', () => {
    component.logIn('user', 'pass');
    expect(component).toBeTruthy();
  });

  it('should fail doing login', () => {
    component.login_attempts = 1;
    spyOn(loginService, 'login').and.returnValue(throwError(''));
    component.logIn('user', 'pass');
    expect(component.variablebloqueo).toBeTruthy();
  });

  it('should navigate to admin page', () => {
    const spy = spyOn(router, 'navigate');
    component.navigate();
    expect(spy).toHaveBeenCalledWith(['/admin']);
  });
});
