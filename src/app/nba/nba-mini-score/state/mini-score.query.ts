import { Injectable } from '@angular/core';

import { Order, QueryConfig, QueryEntity } from '@datorama/akita';

import { MiniScore } from './mini-score.model';
import { MiniScoreState, MiniScoreStore } from './mini-score.store';

@Injectable({
  providedIn: 'root',
})
@QueryConfig({
  sortBy: 'id',
  sortByOrder: Order.DESC,
})
export class MiniScoreQuery extends QueryEntity<MiniScoreState, MiniScore> {
  constructor(protected store: MiniScoreStore) {
    super(store);
  }
}
