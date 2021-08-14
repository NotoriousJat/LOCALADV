import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signupstep2Component } from './signupstep2.component';

describe('Signupstep2Component', () => {
  let component: Signupstep2Component;
  let fixture: ComponentFixture<Signupstep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signupstep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signupstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
