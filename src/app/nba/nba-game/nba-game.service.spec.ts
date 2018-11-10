import { TestBed } from '@angular/core/testing';

import { NbaGameService } from './nba-game.service';

describe('NbaGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbaGameService = TestBed.get(NbaGameService);
    expect(service).toBeTruthy();
  });
});
