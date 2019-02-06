import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateRComponent } from './paginate-r.component';

describe('PaginateRComponent', () => {
  let component: PaginateRComponent;
  let fixture: ComponentFixture<PaginateRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateRComponent ]
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
});
