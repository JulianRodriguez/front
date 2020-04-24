import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { UserComponent } from '../user/user.component';
import { ModifyuserComponent } from '../modifyuser/modifyuser.component';
import { CreaterestaurantComponent } from '../createrestaurant/createrestaurant.component';
import { DeleteComponent } from '../delete/delete.component';
import { CreateuserComponent } from '../createuser/createuser.component';
import { PaginateComponent } from '../paginate/paginate.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from '../search/search.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent,
        UserComponent,
        ModifyuserComponent,
        CreaterestaurantComponent,
        DeleteComponent,
        CreateuserComponent,
        PaginateComponent,
        MainNavComponent,
        SearchComponent
      ],
      imports: [...TestSharedModule.imports, NgxPaginationModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
