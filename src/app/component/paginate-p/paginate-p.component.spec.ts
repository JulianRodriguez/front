import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatePComponent } from './paginate-p.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PaginatePComponent', () => {
  let component: PaginatePComponent;
  let fixture: ComponentFixture<PaginatePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatePComponent ],
      imports: [...TestSharedModule.imports, NgxPaginationModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit products', () => {
    const spy = spyOn(component.productPage, 'emit');
    component.emitProducts(1);
    expect(spy).toHaveBeenCalled();
  });
});
