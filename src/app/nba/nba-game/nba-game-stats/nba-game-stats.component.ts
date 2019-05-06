import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { NbaScheduleService } from '../../nba-schedule/state/nba-schedule.service';
import { createNbaGame, NbaGame } from '../state/nba-game.model';
import { NbaGameQuery } from '../state/nba-game.query';

@Component({
  selector: 'sd-nba-game-stats',
  templateUrl: './nba-game-stats.component.html',
  styleUrls: ['./nba-game-stats.component.scss'],
})
export class NbaGameStatsComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  game: NbaGame = createNbaGame();
  private date = '';

  isLive = false;
  prettyDate: Date = new Date();

  constructor(
    private nbaScheduleService: NbaScheduleService,
    private gameQuery: NbaGameQuery,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
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
      .subscribe(game => (this.game = game));
  }

  ngOnDestroy() {}

  ngOnChanges() {
    if (!this.game || !this.date) {
      return;
    }
    this.prettyDate = this.nbaScheduleService.convertDateString(this.date);
    this.isLive = this.game.meta.isStarted && !this.game.meta.isComplete;
  }
}
