import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoFinalComponent } from './dialogo-final.component';

describe('DialogoFinalComponent', () => {
  let component: DialogoFinalComponent;
  let fixture: ComponentFixture<DialogoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoFinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
