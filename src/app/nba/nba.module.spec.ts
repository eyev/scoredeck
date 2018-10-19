import { NbaModule } from './nba.module';

describe('NbaModule', () => {
  let nbaModule: NbaModule;

  beforeEach(() => {
    nbaModule = new NbaModule();
  });

  it('should create an instance', () => {
    expect(nbaModule).toBeTruthy();
  });
});
