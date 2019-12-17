import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Redes2Component } from './redes2.component';

describe('Redes2Component', () => {
  let component: Redes2Component;
  let fixture: ComponentFixture<Redes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Redes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Redes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
