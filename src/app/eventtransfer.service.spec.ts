import { TestBed } from '@angular/core/testing';

import { EventtransferService } from './eventtransfer.service';

describe('EventtransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventtransferService = TestBed.get(EventtransferService);
    expect(service).toBeTruthy();
  });
});
