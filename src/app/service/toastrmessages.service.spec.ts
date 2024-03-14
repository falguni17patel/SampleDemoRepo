import { TestBed } from '@angular/core/testing';

import { ToastrmessagesService } from './toastrmessages.service';

describe('ToastrmessagesService', () => {
  let service: ToastrmessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrmessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
