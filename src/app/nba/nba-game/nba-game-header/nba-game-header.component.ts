import { Component, Input } from '@angular/core';

import { NbaGame, NbaGameTeam } from '../nba-game';

@Component({
  selector: 'sd-nba-game-header',
  templateUrl: './nba-game-header.component.html',
  styleUrls: ['./nba-game-header.component.scss'],
})
export class NbaGameHeaderComponent {
  @Input()
  game: NbaGame;
  constructor() {}

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
      (quarter, i) => (i > 4 ? (score = +quarter + score) : false),
    );
    return score;
  }
}
