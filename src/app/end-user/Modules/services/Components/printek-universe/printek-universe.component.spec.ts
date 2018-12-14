import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintekUniverseComponent } from './printek-universe.component';

describe('PrintekUniverseComponent', () => {
  let component: PrintekUniverseComponent;
  let fixture: ComponentFixture<PrintekUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintekUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintekUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
