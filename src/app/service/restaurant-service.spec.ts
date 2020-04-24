import { TestBed, async } from '@angular/core/testing';
import { RestaurantService } from './restaurant.service';
import { PRODUCT } from '../tests-module/product-service.mock';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { RESTAURANT } from '../tests-module/restaurant-service.mock';
import { USER } from '../tests-module/user-service.mock';

describe('RestaurantService', () => {
  let restaurantService: RestaurantService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        RestaurantService
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    restaurantService = TestBed.get(RestaurantService);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    restaurantService = null;
  });

  it('should be created', () => {
    expect(restaurantService instanceof RestaurantService).toBeTruthy();
  });


  it('should get all restaurant', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([RESTAURANT]));
    restaurantService.getAll(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get restaurant', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([RESTAURANT]));
    restaurantService.get('').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get restaurant by id', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([RESTAURANT]));
    restaurantService.getByIdUser(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get restaurant by id and name', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([RESTAURANT]));
    restaurantService.getByIdUserAndName(1, '').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should add a restaurant', () => {
    const spy = spyOn(http, 'post').and.returnValue(of([RESTAURANT]));
    restaurantService.addrestaurant('name', 'description', USER).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should delete a restaurant', () => {
    const spy = spyOn(http, 'delete').and.returnValue(of([RESTAURANT]));
    restaurantService.deleterestaurant(RESTAURANT).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get the total', () => {
    const spy = spyOn(http, 'get').and.returnValue(of(5));
    restaurantService.getTotalRestaurant().subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should edit a user', () => {
    const spy = spyOn(http, 'put').and.returnValue(of(RESTAURANT));
    restaurantService.editUser(RESTAURANT, '', '').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
