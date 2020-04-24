import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
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
import { PRODUCT } from 'src/app/tests-module/product-service.mock';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent,
        DescripcionProductoComponent,
        PaginatePComponent,
        ModifyproductComponent,
        QRComponent,
        DeletePComponent,
        MainNavComponent,
        PhotoSelectorComponent,
        SearchComponent
      ],
      imports: [...TestSharedModule.imports, NgxPaginationModule, NgxQRCodeModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product', () => {
    component.loadProduct();
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should get product pagination', () => {
    component.getProductsPaginate('');
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should change selected product', () => {
    const spy = spyOn(component.editProductModal, 'openModal');
    component.changeProductSelected(PRODUCT, 'editProductModal', 'openModal');
    expect(spy).toHaveBeenCalled();
  });
});
