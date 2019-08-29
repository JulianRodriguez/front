import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrestaurantComponent } from './modifyrestaurant.component';

describe('ModifyrestaurantComponent', () => {
  let component: ModifyrestaurantComponent;
  let fixture: ComponentFixture<ModifyrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
