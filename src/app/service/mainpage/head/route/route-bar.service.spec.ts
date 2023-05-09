import { TestBed } from '@angular/core/testing';

import { RouteBarService } from './route-bar-service.service';

describe('RouteBarService', () => {
  let service: RouteBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
