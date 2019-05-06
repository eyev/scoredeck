import { MiniScoreMeta, MiniScoreTeam } from '../../nba-mini-score/state/mini-score.model';

export interface NbaGame {
  home: NbaGameTeam;
  away: NbaGameTeam;
  meta: NbaGameMeta;
}

export interface NbaGameTeam extends MiniScoreTeam {
  players: NbaGamePlayer[];
  teamStats: NbaGameTeamStats;
}

export interface NbaGameMeta extends MiniScoreMeta {
  arena: {
    name: string;
    city: string;
    state: string;
    country: string;
  };
  nugget: string;
}

export interface NbaGamePlayer {
  personId: string;
  fullName: string;
  shortName: string;
  teamId: string;
  isOnCourt: boolean;
  points: string;
  pos: string;
  min: string;
  fgm: string;
  fga: string;
  fgp: string;
  ftm: string;
  fta: string;
  ftp: string;
  tpm: string;
  tpa: string;
  tpp: string;
  offReb: string;
  defReb: string;
  totReb: string;
  assists: string;
  pFouls: string;
  steals: string;
  turnovers: string;
  blocks: string;
  plusMinus: string;
  dnp: string;
}

export interface NbaGameTeamStats {
  fastBreakPoints: string;
  pointsInPaint: string;
  secondChancePoints: string;
  pointsOffTurnovers: string;
  points: string;
  fgm: string;
  fga: string;
  fgp: string;
  ftm: string;
  fta: string;
  ftp: string;
  tpm: string;
  tpa: string;
  tpp: string;
  offReb: string;
  defReb: string;
  totReb: string;
  assists: string;
  pFouls: string;
  steals: string;
  turnovers: string;
  blocks: string;
}

export function createNbaGame(): NbaGame {
  return {
    home: {
      name: '',
      shortName: '',
      record: '',
      total: '',
      quarters: ['0', '0', '0', '0'],
      players: [],
      teamId: '',
      teamStats: {
        fastBreakPoints: '',
        pointsInPaint: '',
        secondChancePoints: '',
        pointsOffTurnovers: '',
        points: '',
        fgm: '',
        fga: '',
        fgp: '',
        ftm: '',
        fta: '',
        ftp: '',
        tpm: '',
        tpa: '',
        tpp: '',
        offReb: '',
        defReb: '',
        totReb: '',
        assists: '',
        pFouls: '',
        steals: '',
        turnovers: '',
        blocks: '',
      },
    },
    away: {
      name: '',
      shortName: '',
      record: '',
      total: '',
      quarters: ['0', '0', '0', '0'],
      players: [],
      teamId: '',
      teamStats: {
        fastBreakPoints: '',
        pointsInPaint: '',
        secondChancePoints: '',
        pointsOffTurnovers: '',
        points: '',
        fgm: '',
        fga: '',
        fgp: '',
        ftm: '',
        fta: '',
        ftp: '',
        tpm: '',
        tpa: '',
        tpp: '',
        offReb: '',
        defReb: '',
        totReb: '',
        assists: '',
        pFouls: '',
        steals: '',
        turnovers: '',
        blocks: '',
      },
    },
    meta: {
      broadcaster: '',
      clock: '',
      time: '',
      isHalftime: false,
      isOvertime: false,
      isComplete: false,
      isPlayoffs: false,
      isEndOfPeriod: false,
      isStarted: false,
      currentPeriod: '',
      gameId: '',
      seriesRecord: '',
      arena: {
        name: '',
        city: '',
        state: '',
        country: '',
      },
      nugget: '',
    },
  };
}
