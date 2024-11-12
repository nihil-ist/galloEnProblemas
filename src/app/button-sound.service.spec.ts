import { TestBed } from '@angular/core/testing';

import { ButtonSoundService } from './button-sound.service';

describe('ButtonSoundService', () => {
  let service: ButtonSoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonSoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
