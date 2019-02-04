import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterestaurantComponent } from './createrestaurant.component';

describe('CreaterestaurantComponent', () => {
  let component: CreaterestaurantComponent;
  let fixture: ComponentFixture<CreaterestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
