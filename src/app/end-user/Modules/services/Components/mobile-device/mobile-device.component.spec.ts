import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDeviceComponent } from './mobile-device.component';

describe('MobileDeviceComponent', () => {
  let component: MobileDeviceComponent;
  let fixture: ComponentFixture<MobileDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
