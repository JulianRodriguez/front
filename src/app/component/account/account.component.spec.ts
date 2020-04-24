import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { SuccessComponent } from '../success/success.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { CreateuserComponent } from '../createuser/createuser.component';
import { SearchComponent } from '../search/search.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, SuccessComponent, MainNavComponent, CreateuserComponent, SearchComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exec ngOnInit and pass exists', () => {
    component.ngOnInit();
    component.myForm.patchValue({
      contrasena1: 'hola1234'
    });
    expect(component.passExists).toBeTruthy();
  });
});
