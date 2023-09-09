import { TestBed } from '@angular/core/testing';

import { BasicAuthInterceptorService } from './basic-auth-intercepteur.service';

describe('BasicAuthIntercepteurService', () => {
  let service: BasicAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
