import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantComponent } from './restaurant.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { DescripcionProductoComponent } from '../descripcion-producto/descripcion-producto.component';
import { PaginatePComponent } from '../paginate-p/paginate-p.component';
import { ModifyproductComponent } from '../modifyproduct/modifyproduct.component';
import { QRComponent } from '../qr/qr.component';
import { DeletePComponent } from '../delete-p/delete-p.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SearchComponent } from '../search/search.component';
import { SearchService } from 'src/app/service/search.service';
import { RESTAURANT } from 'src/app/tests-module/restaurant-service.mock';
import { DescripcionRestaurantComponent } from '../descripcion-restaurant/descripcion-restaurant.component';
import { ModifyrestaurantComponent } from '../modifyrestaurant/modifyrestaurant.component';
import { CreateproductComponent } from '../createproduct/createproduct.component';
import { DeleteRComponent } from '../delete-r/delete-r.component';
import { PaginateRComponent } from '../paginate-r/paginate-r.component';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantComponent,
        DescripcionProductoComponent,
        PaginatePComponent,
        ModifyproductComponent,
        QRComponent,
        DeletePComponent,
        MainNavComponent,
        PhotoSelectorComponent,
        SearchComponent,
        DescripcionRestaurantComponent,
        ModifyrestaurantComponent,
        CreateproductComponent,
        DeleteRComponent,
        PaginateRComponent
      ],
      imports: [...TestSharedModule.imports, NgxPaginationModule, NgxQRCodeModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load restaurant', () => {
    component.loadRestaurant();
    expect(component.restaurants.length).toBeGreaterThan(0);
  });

  it('should get restaurant pagination', () => {
    component.getRestaurantPaginate('');
    expect(component.restaurants.length).toBeGreaterThan(0);
  });

  it('should change selected restaurant', () => {
    const spy = spyOn(component.editRestaurantModal, 'openModal');
    component.changeRestaurantSelected(RESTAURANT, 'editRestaurantModal', 'openModal');
    expect(spy).toHaveBeenCalled();
  });
});
