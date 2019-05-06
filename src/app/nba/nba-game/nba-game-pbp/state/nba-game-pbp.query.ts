import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NbaGamePbpStore, NbaGamePbpState } from './nba-game-pbp.store';

@Injectable({ providedIn: 'root' })
export class NbaGamePbpQuery extends Query<NbaGamePbpState> {

  constructor(protected store: NbaGamePbpStore) {
    super(store);
  }

}
