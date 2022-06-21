import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroe1Component } from './heroe1.component';

describe('Heroe1Component', () => {
  let component: Heroe1Component;
  let fixture: ComponentFixture<Heroe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Heroe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
