import { Injectable } from '@angular/core';

import { Store, StoreConfig } from '@datorama/akita';

import { createNbaGame, NbaGame } from './nba-game.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nba-game' })
export class NbaGameStore extends Store<NbaGame> {
  constructor() {
    super(createNbaGame());
  }
}
