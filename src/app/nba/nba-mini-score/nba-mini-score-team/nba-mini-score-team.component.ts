import { Component, Input, OnInit } from '@angular/core';

import { MiniScoreMeta, MiniScoreTeam } from '../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score-team',
  templateUrl: './nba-mini-score-team.component.html',
  styleUrls: ['./nba-mini-score-team.component.scss'],
})
export class NbaMiniScoreTeamComponent implements OnInit {
  @Input()
  team: MiniScoreTeam;
  @Input()
  isWinner: boolean | undefined = undefined;
  @Input()
  meta: MiniScoreMeta;
  constructor() {}

  ngOnInit() {}

  isActivePeriod(period: number) {
    if (this.meta.isComplete) {
      return false;
    }
    return +this.meta.currentPeriod === period + 1;
  }

  getOverTimeScore() {
    let score = 0;
    this.team.quarters.map(
      (quarter, i) => (i > 3 ? (score = +quarter + score) : false),
    );
    return score;
  }
}
