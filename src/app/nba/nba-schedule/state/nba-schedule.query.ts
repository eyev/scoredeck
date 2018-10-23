import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NbaScheduleStore, NbaScheduleState } from './nba-schedule.store';

@Injectable({ providedIn: 'root' })
export class NbaScheduleQuery extends Query<NbaScheduleState> {

  constructor(protected store: NbaScheduleStore) {
    super(store);
  }

}
