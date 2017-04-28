import { TestBed, inject } from '@angular/core/testing';

import { RevisionService } from './revision.service';

describe('RevisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevisionService]
    });
  });

  it('should ...', inject([RevisionService], (service: RevisionService) => {
    expect(service).toBeTruthy();
  }));
});
