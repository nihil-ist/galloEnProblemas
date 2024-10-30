import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelFuncionesComponent } from './nivel-funciones.component';

describe('NivelFuncionesComponent', () => {
  let component: NivelFuncionesComponent;
  let fixture: ComponentFixture<NivelFuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelFuncionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
