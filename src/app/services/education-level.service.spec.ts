import { TestBed } from '@angular/core/testing';

import { EducationLevelService } from './education-level.service';

describe('EducationLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationLevelService = TestBed.get(EducationLevelService);
    expect(service).toBeTruthy();
  });
});
