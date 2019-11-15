import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Norelate1Component } from './norelate1.component';

describe('Norelate1Component', () => {
  let component: Norelate1Component;
  let fixture: ComponentFixture<Norelate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Norelate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Norelate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
