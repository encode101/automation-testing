import { TestBed } from '@angular/core/testing';

import { MultiSelectDropDownService } from './multi-select-drop-down.service';

describe('MultiSelectDropDownService', () => {
  let service: MultiSelectDropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiSelectDropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
