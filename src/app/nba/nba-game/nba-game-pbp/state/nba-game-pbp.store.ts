import { Injectable } from '@angular/core';

import { Store, StoreConfig } from '@datorama/akita';

export interface NbaGamePbpState {
  1: NbaGamePbp[];
  2: NbaGamePbp[];
  3: NbaGamePbp[];
  4: NbaGamePbp[];
  ot: NbaGamePbp[];
}
export interface NbaGamePbp {
  clock: string;
  eventMsgType: string;
  description: string;
  personId: string;
  teamId: string;
  vTeamScore: string;
  hTeamScore: string;
  isScoreChange: boolean;
  isVideoAvailable: boolean;
  formatted: {
    description: string;
  };
}

export function createNbaPbpState(): NbaGamePbpState {
  return {
    1: [],
    2: [],
    3: [],
    4: [],
    ot: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nba-game-pbp' })
export class NbaGamePbpStore extends Store<NbaGamePbpState> {
  constructor() {
    super(createNbaPbpState());
  }
}
