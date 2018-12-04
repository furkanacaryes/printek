import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserComponent } from './end-user.component';

describe('EndUserComponent', () => {
  let component: EndUserComponent;
  let fixture: ComponentFixture<EndUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
