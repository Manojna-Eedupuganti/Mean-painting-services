import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { proguardsGuard } from './proguards.guard';

describe('proguardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => proguardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
