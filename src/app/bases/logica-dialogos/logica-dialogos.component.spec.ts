import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaDialogosComponent } from './logica-dialogos.component';

describe('LogicaDialogosComponent', () => {
  let component: LogicaDialogosComponent;
  let fixture: ComponentFixture<LogicaDialogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicaDialogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicaDialogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
