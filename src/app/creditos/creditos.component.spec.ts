import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosComponent } from './creditos.component';

describe('CreditosComponent', () => {
  let component: CreditosComponent;
  let fixture: ComponentFixture<CreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
