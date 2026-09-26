import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Triangulo } from './triangulo';

describe('Triangulo', () => {
  let component: Triangulo;
  let fixture: ComponentFixture<Triangulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Triangulo],
    }).compileComponents();

    fixture = TestBed.createComponent(Triangulo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
