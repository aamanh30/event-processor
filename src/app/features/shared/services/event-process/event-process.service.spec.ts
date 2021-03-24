import { TestBed } from '@angular/core/testing';

import { EventProcessService } from './event-process.service';

describe('EventProcessService', () => {
  let service: EventProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
