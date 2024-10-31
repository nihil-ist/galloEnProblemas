import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo3Component } from './dialogo3.component';

describe('Dialogo3Component', () => {
  let component: Dialogo3Component;
  let fixture: ComponentFixture<Dialogo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
