import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Norelate2Component } from './norelate2.component';

describe('Norelate2Component', () => {
  let component: Norelate2Component;
  let fixture: ComponentFixture<Norelate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Norelate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Norelate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
