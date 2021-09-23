import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmation1Component } from './confirmation1.component';

describe('Confirmation1Component', () => {
  let component: Confirmation1Component;
  let fixture: ComponentFixture<Confirmation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
