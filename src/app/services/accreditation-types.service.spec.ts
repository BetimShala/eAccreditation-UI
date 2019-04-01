import { TestBed } from '@angular/core/testing';

import { AccreditationTypesService } from './accreditation-types.service';

describe('AccreditationTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccreditationTypesService = TestBed.get(AccreditationTypesService);
    expect(service).toBeTruthy();
  });
});
