import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionRestaurantComponent } from './descripcion-restaurant.component';

describe('DescripcionRestaurantComponent', () => {
  let component: DescripcionRestaurantComponent;
  let fixture: ComponentFixture<DescripcionRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
