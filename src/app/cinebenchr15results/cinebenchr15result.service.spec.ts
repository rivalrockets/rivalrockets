import { TestBed, inject } from '@angular/core/testing';

import { CinebenchR15ResultService } from './cinebenchr15result.service';

describe('Cinebenchr15resultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinebenchR15ResultService]
    });
  });

  it('should ...', inject([CinebenchR15ResultService], (service: CinebenchR15ResultService) => {
    expect(service).toBeTruthy();
  }));
});
