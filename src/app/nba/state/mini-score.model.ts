import { ID } from '@datorama/akita';

export interface MiniScoreTeam {
  name: string;
  shortName: string;
  record: string;
  total: string;
  quarters: string[];
}
export interface MiniScoreMeta {
  broadcaster: string;
  clock: string;
  time: string;
  isHalftime: boolean;
  isOvertime: boolean;
  isComplete: boolean;
  isPlayoffs: boolean;
  isEndOfPeriod: boolean;
  isStarted: boolean;
  currentPeriod: string;
  gameId: string;
  seriesRecord: string;
}

export interface MiniScoreGame {
  home: MiniScoreTeam;
  away: MiniScoreTeam;
  meta: MiniScoreMeta;
}

export interface MiniScore {
  id: ID;
  games: MiniScoreGame[];
}

export function createMiniScore(params: Partial<MiniScore>): MiniScore {
  return {
    id: '0',
    games: [
      {
        home: {
          name: '',
          shortName: '',
          record: '',
          total: '',
          quarters: [],
        },
        away: {
          name: '',
          shortName: '',
          record: '',
          total: '',
          quarters: [],
        },
        meta: {
          clock: '',
          broadcaster: '',
          time: '',
          isHalftime: false,
          isOvertime: false,
          isComplete: false,
          isPlayoffs: false,
          isEndOfPeriod: false,
          isStarted: false,
          currentPeriod: '',
          gameId: '0',
          seriesRecord: '',
        },
      },
    ],
    ...params,
  };
}
