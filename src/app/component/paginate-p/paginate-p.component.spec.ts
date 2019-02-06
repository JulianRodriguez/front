import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatePComponent } from './paginate-p.component';

describe('PaginatePComponent', () => {
  let component: PaginatePComponent;
  let fixture: ComponentFixture<PaginatePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
