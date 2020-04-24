import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSelectorComponent } from './photo-selector';
import { TestSharedModule } from 'src/app/tests-module/test-shared-module';

describe('PhotoSelectorComponent', () => {
  let component: PhotoSelectorComponent;
  let fixture: ComponentFixture<PhotoSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSelectorComponent ],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set photo', () => {
    component.setPhoto('photo');
    expect(component.photo).toBe('photo');
  });

  it('should convert photo to base64', () => {
    const event = {
      target: {
        files: [new Blob()]
      }
    };
    const spy = spyOn((component as any), 'convertImageToBase64').and.callThrough();
    component.photoLoaded(event);
    expect(spy).toHaveBeenCalled();
  });
});
