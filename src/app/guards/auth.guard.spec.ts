import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { TestSharedModule } from '../tests-module/test-shared-module';
import { LoginService } from '../service/login.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers, AuthGuard]
    });
  });

  beforeEach(() => {
    authGuard = TestBed.get(AuthGuard);
    loginService = TestBed.get(LoginService);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should exec canActivate and return true', () => {
    const result = authGuard.canActivate();
    expect(result).toBeTruthy();
  });

  it('should exec canActivate and return false', () => {
    spyOn(loginService, 'getCurrentUser').and.returnValue(false);
    const result = authGuard.canActivate();
    expect(result).toBeFalsy();
  });
});
