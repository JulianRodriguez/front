import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { MainNavComponent } from './main-nav.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavComponent, SearchComponent],
      imports: [
        ...TestSharedModule.imports,
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ],
      providers: [
        ...TestSharedModule.providers
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page', () => {
    const spy = spyOn(router, 'navigate');
    spyOn(localStorage, 'removeItem');
    component.logout();
    expect(spy).toHaveBeenCalledWith(['/login']);
  });
});
