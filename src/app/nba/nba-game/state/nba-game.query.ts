import { Injectable } from '@angular/core';

import { Query } from '@datorama/akita';

import { NbaGame } from './nba-game.model';
import { NbaGameStore } from './nba-game.store';

@Injectable({ providedIn: 'root' })
export class NbaGameQuery extends Query<NbaGame> {
  constructor(protected store: NbaGameStore) {
    super(store);
  }
}
