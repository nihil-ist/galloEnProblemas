import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelCondicionalesComponent } from './nivel-condicionales.component';

describe('NivelCondicionalesComponent', () => {
  let component: NivelCondicionalesComponent;
  let fixture: ComponentFixture<NivelCondicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelCondicionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelCondicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
