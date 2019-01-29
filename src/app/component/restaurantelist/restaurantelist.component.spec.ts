import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantelistComponent } from './restaurantelist.component';

describe('RestaurantelistComponent', () => {
  let component: RestaurantelistComponent;
  let fixture: ComponentFixture<RestaurantelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
