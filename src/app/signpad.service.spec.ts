import { TestBed, inject } from '@angular/core/testing';

import { SignpadService } from './signpad.service';

describe('SignpadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignpadService]
    });
  });

  it('should be created', inject([SignpadService], (service: SignpadService) => {
    expect(service).toBeTruthy();
  }));
});
