import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { MiniScore } from './mini-score.model';

export interface MiniScoreState extends EntityState<MiniScore> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'mini-score' })
export class MiniScoreStore extends EntityStore<MiniScoreState, MiniScore> {
  constructor() {
    super();
  }
}
