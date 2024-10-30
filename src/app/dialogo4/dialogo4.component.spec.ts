import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogo4Component } from './dialogo4.component';

describe('Dialogo4Component', () => {
  let component: Dialogo4Component;
  let fixture: ComponentFixture<Dialogo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
