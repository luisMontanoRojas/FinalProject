import { TestBed } from '@angular/core/testing';

import { DealerShipService } from './dealer-ship.service';

describe('DealerShipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealerShipService = TestBed.get(DealerShipService);
    expect(service).toBeTruthy();
  });
});
