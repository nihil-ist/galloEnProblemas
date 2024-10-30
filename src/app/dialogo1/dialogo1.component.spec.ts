import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo1Component } from './dialogo1.component';

describe('Dialogo1Component', () => {
  let component: Dialogo1Component;
  let fixture: ComponentFixture<Dialogo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
