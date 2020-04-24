import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateComponent } from './paginate.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PaginateComponent', () => {
  let component: PaginateComponent;
  let fixture: ComponentFixture<PaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateComponent ],
      imports: [...TestSharedModule.imports, NgxPaginationModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update paginate', () => {
    component.updatePaginate();
    expect(component.pagination).toBeDefined();
  });
});
