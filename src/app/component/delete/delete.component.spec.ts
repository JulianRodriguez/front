import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';
import { USER } from 'src/app/tests-module/user-service.mock';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.visible).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.visible).toBeFalsy();
  });

  it('should delete a user', () => {
    const spy = spyOn(component, 'closeModal');
    component.userToDelete = USER;
    component.onDelete();
    expect(spy).toHaveBeenCalled();
  });

  it('should delete a user', () => {
    component.deleteUser(USER);
    expect(component.userToDelete).toEqual(USER);
  });
});
