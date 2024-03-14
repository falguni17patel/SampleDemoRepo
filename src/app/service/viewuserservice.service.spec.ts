import { TestBed } from '@angular/core/testing';

import { ViewuserserviceService } from './viewuserservice.service';

describe('ViewuserserviceService', () => {
  let service: ViewuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
