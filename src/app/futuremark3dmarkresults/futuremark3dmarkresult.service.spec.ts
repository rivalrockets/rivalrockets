import { TestBed, inject } from '@angular/core/testing';

import { Futuremark3dMarkResultService } from './futuremark3dmarkresult.service';

describe('Futuremark3dmarkresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Futuremark3dMarkResultService]
    });
  });

  it('should ...', inject([Futuremark3dMarkResultService], (service: Futuremark3dMarkResultService) => {
    expect(service).toBeTruthy();
  }));
});
