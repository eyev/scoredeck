import { Component, Input, OnInit } from '@angular/core';

import { MiniScoreMeta } from '../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score-key',
  templateUrl: './nba-mini-score-key.component.html',
  styleUrls: [
    './nba-mini-score-key.component.scss',
    '../nba-mini-score-team/nba-mini-score-team.component.scss',
  ],
})
export class NbaMiniScoreKeyComponent implements OnInit {
  @Input()
  meta: MiniScoreMeta;
  constructor() {}

  ngOnInit() {}
  isActivePeriod(period: number) {
    if (this.meta.isComplete) {
      return false;
    }
    return +this.meta.currentPeriod === period;
  }
}
