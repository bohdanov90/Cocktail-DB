import { TestBed } from '@angular/core/testing';

import { MarkFilterItemService } from './mark-filter-item.service';

describe('MarkFilterItemService', () => {
  let service: MarkFilterItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkFilterItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
