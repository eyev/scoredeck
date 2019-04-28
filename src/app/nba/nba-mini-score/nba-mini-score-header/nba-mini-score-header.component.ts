import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { truncate } from 'fs';

import { MiniScoreMeta } from '../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score-header',
  templateUrl: './nba-mini-score-header.component.html',
  styleUrls: ['./nba-mini-score-header.component.scss'],
})
export class NbaMiniScoreHeaderComponent {
  @Input()
  meta: MiniScoreMeta;

  getQuarter(quarter: number) {
    if (quarter === 1) {
      return '1st';
    }
    if (quarter === 2) {
      return '2nd';
    }
    if (quarter === 3) {
      return '3rd';
    }
    if (quarter === 4 && !this.meta.isComplete) {
      return '4th';
    }
    if (quarter === 4 && this.meta.isComplete) {
      return 'Final';
    }

    if (quarter > 4 && !this.meta.isComplete) {
      return 'OT';
    }
  }

  getTime() {
    switch (true) {
      case this.meta.clock !== '' && !this.meta.isEndOfPeriod:
        return `${this.getQuarter(+this.meta.currentPeriod)} Qtr | ${
          this.meta.clock
        }`;
        break;

      case this.meta.isEndOfPeriod &&
        !this.meta.isHalftime &&
        !this.meta.isComplete:
        return `End of ${this.getQuarter(+this.meta.currentPeriod)} Qtr`;
        break;

      case this.meta.isHalftime:
        return `Halftime`;
        break;

      case this.meta.isComplete:
        return `Final`;
        break;

      case this.meta.clock === '' &&
        this.meta.time !== '' &&
        !this.meta.isComplete &&
        !this.meta.isEndOfPeriod &&
        !this.meta.isHalftime:
        return `${this.meta.time}`;
        break;

      case this.meta.clock === '' &&
        this.meta.time === '' &&
        !this.meta.isComplete &&
        !this.meta.isEndOfPeriod &&
        !this.meta.isHalftime:
        return `TBD`;
        break;
    }
  }
}
