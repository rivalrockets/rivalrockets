import { TestBed, inject } from '@angular/core/testing';

import { Futuremark3dMark06ResultService } from './futuremark3dmark06result.service';

describe('Futuremark3dMark06ResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Futuremark3dMark06ResultService]
    });
  });

  it('should ...', inject([Futuremark3dMark06ResultService], (service: Futuremark3dMark06ResultService) => {
    expect(service).toBeTruthy();
  }));
});
