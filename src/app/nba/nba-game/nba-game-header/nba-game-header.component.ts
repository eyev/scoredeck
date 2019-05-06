import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { createNbaGame, NbaGame, NbaGameTeam } from '../state/nba-game.model';
import { NbaGameQuery } from '../state/nba-game.query';

@Component({
  selector: 'sd-nba-game-header',
  templateUrl: './nba-game-header.component.html',
  styleUrls: ['./nba-game-header.component.scss'],
})
export class NbaGameHeaderComponent implements OnInit, OnDestroy {
  game: NbaGame = createNbaGame();
  constructor(private gameQuery: NbaGameQuery) {}

  ngOnInit() {
    this.gameQuery
      .select<NbaGame>()
      .pipe(untilDestroyed(this))
      .subscribe(game => (this.game = game));
  }

  ngOnDestroy() {}

  getQuarter(quarter: number) {
    if (quarter === 1) {
      return '1st Qtr';
    }
    if (quarter === 2) {
      return '2nd Qtr';
    }
    if (quarter === 3) {
      return '3rd Qtr';
    }
    if (quarter === 4 && !this.game.meta.isComplete) {
      return '4th Qtr';
    }
    if (quarter === 4 && this.game.meta.isComplete) {
      return 'Final';
    }

    if (quarter > 4 && !this.game.meta.isComplete) {
      return 'Overtime';
    }
  }

  getOverTimeScore(team: NbaGameTeam) {
    let score = 0;
    team.quarters.map(
      (quarter, i) => (i > 3 ? (score = +quarter + score) : false),
    );
    return score;
  }
}
