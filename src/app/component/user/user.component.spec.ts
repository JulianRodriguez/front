import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { ModifyuserComponent } from '../modifyuser/modifyuser.component';
import { CreaterestaurantComponent } from '../createrestaurant/createrestaurant.component';
import { DeleteComponent } from '../delete/delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateuserComponent } from '../createuser/createuser.component';
import { DeletePComponent } from '../delete-p/delete-p.component';
import { DeleteRComponent } from '../delete-r/delete-r.component';
import { CreateproductComponent } from '../createproduct/createproduct.component';
import { PaginateComponent } from '../paginate/paginate.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PhotoSelectorComponent } from '../photo-selector/photo-selector';
import { SearchComponent } from '../search/search.component';
import { USER } from 'src/app/tests-module/user-service.mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        ModifyuserComponent,
        CreaterestaurantComponent,
        DeleteComponent,
        CreateuserComponent,
        DeletePComponent,
        CreateproductComponent,
        DeleteRComponent,
        PaginateComponent,
        MainNavComponent,
        PhotoSelectorComponent,
        SearchComponent
      ],
      imports: [...TestSharedModule.imports, NgxPaginationModule],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user', () => {
    component.loadUser();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should get user pagination', () => {
    component.getUsersPaginate('');
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should change selected user', () => {
    const spy = spyOn(component.editEmployeeModal, 'openModal');
    component.changeUserSelected(USER, 'editEmployeeModal', 'openModal');
    expect(spy).toHaveBeenCalled();
  });
});
