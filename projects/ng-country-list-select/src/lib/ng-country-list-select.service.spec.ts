import { TestBed } from '@angular/core/testing';

import { NgCountryListSelectService } from './ng-country-list-select.service';

describe('NgCountryListSelectService', () => {
  let service: NgCountryListSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCountryListSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
