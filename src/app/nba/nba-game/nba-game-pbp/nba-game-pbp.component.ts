import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { createNbaGame, NbaGame, NbaGameTeam } from '../state/nba-game.model';
import { NbaGameQuery } from '../state/nba-game.query';
import { NbaGamePbpQuery } from './state/nba-game-pbp.query';
import { NbaGamePbpService } from './state/nba-game-pbp.service';
import { NbaGamePbpState } from './state/nba-game-pbp.store';

@Component({
  selector: 'sd-nba-game-pbp',
  templateUrl: './nba-game-pbp.component.html',
  styleUrls: ['./nba-game-pbp.component.scss'],
})
export class NbaGamePbpComponent implements OnInit, OnDestroy {
  game: NbaGame = createNbaGame();

  teams: NbaGameTeam[];
  quarters: Array<{ id: string; name: string }> = [];
  selected: string;
  pbp = of<NbaGamePbpState>();
  isLoading = of<boolean>();
  private deadBallIds = ['12', '13', '20'];
  private date: string;

  constructor(
    private pbpService: NbaGamePbpService,
    private pbpQuery: NbaGamePbpQuery,
    private gameQuery: NbaGameQuery,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.isLoading = this.pbpQuery.selectLoading();

    this.route.parent.params
      .pipe(
        switchMap(params => {
          this.date = params.date;
          return of();
        }),
        untilDestroyed(this),
      )
      .subscribe();

    this.gameQuery
      .select<NbaGame>()
      .pipe(untilDestroyed(this))
      .subscribe(game => {
        if (!game.home.name) {
          return;
        }
        this.game = game;
        this.teams = [game.home, game.away];
        this.quarters = game.meta.isOvertime
          ? [
              { name: '1st Quarter', id: '1' },
              { name: '2nd Quarter', id: '2' },
              { name: '3rd Quarter', id: '3' },
              { name: '4th Quarter', id: '4' },
              { name: 'OT', id: '5' },
            ]
          : [
              { name: '1st Quarter', id: '1' },
              { name: '2nd Quarter', id: '2' },
              { name: '3rd Quarter', id: '3' },
              { name: '4th Quarter', id: '4' },
            ];
        if (!this.selected) {
          this.selected = '1';
        }
        this.pbp = this.pbpQuery.select(state => state[this.selected]);
        if (this.teams.length === 0) {
          return;
        }
        this.loadPbp();
      });

    if (!this.game) {
      return;
    }
  }

  ngOnDestroy() {
    this.pbpService.reset();
  }

  loadPbp() {
    if (!this.date || !this.game || !this.selected) {
      return;
    }

    if (this.selected === '5') {
      const overtimeQuarters = Array.from({
        length: this.game.home.quarters.length - 4,
      }).map((x, i) => {
        return `${i + 5}`;
      });

      this.pbpService
        .getOvertime(overtimeQuarters, this.game.meta.gameId, this.date)
        .pipe(untilDestroyed(this))
        .subscribe();
    }

    this.pbpService
      .get(this.selected, this.game.meta.gameId, this.date)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
  getTeamIcon(teamId: string) {
    if (!teamId || this.teams.length === 0) {
      return;
    }
    const shortName = this.teams.filter(team => team.teamId === teamId)[0]
      .shortName;
    return `/assets/logos/nba/teams/${shortName}/${shortName}.svg`;
  }

  isDeadBall(id: string) {
    return this.deadBallIds.some(dbid => dbid === id);
  }
}
