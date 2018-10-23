import { Injectable } from '@angular/core';

import { Store, StoreConfig } from '@datorama/akita';

import { NbaSchedule } from '../nba-schedule';

export interface NbaScheduleState {
  year: string;
  schedule: NbaSchedule[];
  loadedGames: NbaSchedule[];
}

export function createInitialState(
  params?: Partial<NbaScheduleState>,
): NbaScheduleState {
  return {
    loadedGames: [],
    year: '',
    schedule: [],
    ...params,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nba-schedule' })
export class NbaScheduleStore extends Store<NbaScheduleState> {
  constructor() {
    super(createInitialState());
  }
}
