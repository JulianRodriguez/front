import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateRComponent } from './paginate-r.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PaginateRComponent', () => {
  let component: PaginateRComponent;
  let fixture: ComponentFixture<PaginateRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateRComponent ],
      imports: [...TestSharedModule.imports, NgxPaginationModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit restaurant', () => {
    const spy = spyOn(component.restaurantPage, 'emit');
    component.emitRestaurant(1);
    expect(spy).toHaveBeenCalled();
  });
});
