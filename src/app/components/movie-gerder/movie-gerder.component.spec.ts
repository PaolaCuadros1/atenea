import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGerderComponent } from './movie-gerder.component';

describe('MovieGerderComponent', () => {
  let component: MovieGerderComponent;
  let fixture: ComponentFixture<MovieGerderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
