import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo2Component } from './dialogo2.component';

describe('Dialogo2Component', () => {
  let component: Dialogo2Component;
  let fixture: ComponentFixture<Dialogo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
