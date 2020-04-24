import { TestBed, async } from '@angular/core/testing';
import { ProductService } from './product.service';
import { PRODUCT } from '../tests-module/product-service.mock';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { RESTAURANT } from '../tests-module/restaurant-service.mock';


describe('ProductService', () => {
  let productService: ProductService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    productService = TestBed.get(ProductService);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    productService = null;
  });

  it('should be created', () => {
    expect(productService instanceof ProductService).toBeTruthy();
  });


  it('should get all products', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([PRODUCT]));
    productService.getAll(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get products', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([PRODUCT]));
    productService.get('').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get restaurant by id', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([PRODUCT]));
    productService.getByIdRestaurant(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get restaurant by id and name', () => {
    const spy = spyOn(http, 'get').and.returnValue(of([PRODUCT]));
    productService.getByIdRestaurantAndName(1, '').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should add a product', () => {
    const spy = spyOn(http, 'post').and.returnValue(of([PRODUCT]));
    productService.addproduct('name', 'description', 'photo', RESTAURANT).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should delete a product', () => {
    const spy = spyOn(http, 'delete').and.returnValue(of([PRODUCT]));
    productService.deleteproduct(PRODUCT).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get the total', () => {
    const spy = spyOn(http, 'get').and.returnValue(of(5));
    productService.getTotal().subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get the total of a restaurant', () => {
    const spy = spyOn(http, 'get').and.returnValue(of(5));
    productService.getTotalProductoRestaurant(1).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should edit a product', () => {
    const spy = spyOn(http, 'put').and.returnValue(of(PRODUCT));
    productService.editProd(PRODUCT, '', '').subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
