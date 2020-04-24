import { TestBed, async } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { RESTAURANT } from '../tests-module/restaurant-service.mock';
import { USER } from '../tests-module/user-service.mock';

describe('UserService', () => {
  let userService: UserService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    userService = null;
  });

  it('should be created', () => {
    expect(userService instanceof UserService).toBeTruthy();
  });


  it('should get all users', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([USER]));
    userService.getAll(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get user', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([USER]));
    userService.get('').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should add a user', () => {
    const spy = spyOn(http, 'post').and.returnValue(of([USER]));
    userService.adduser('username', 'password', 1, 'name', 'phone', 'email').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should delete a user', () => {
    const spy = spyOn(http, 'delete').and.returnValue(of([USER]));
    userService.deleteuser(USER).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get the total', () => {
    const spy = spyOn(http, 'get').and.returnValue(of(5));
    userService.getTotal().subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should edit a user', () => {
    const spy = spyOn(http, 'put').and.returnValue(of(RESTAURANT));
    userService.modifyuser(USER, '', 0, '', '', '').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
