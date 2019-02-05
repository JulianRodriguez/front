import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePComponent } from './delete-p.component';

describe('DeletePComponent', () => {
  let component: DeletePComponent;
  let fixture: ComponentFixture<DeletePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
