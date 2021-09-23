import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loder2Component } from './loder2.component';

describe('Loder2Component', () => {
  let component: Loder2Component;
  let fixture: ComponentFixture<Loder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
