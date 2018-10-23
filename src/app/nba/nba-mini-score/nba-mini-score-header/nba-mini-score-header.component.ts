import { Component, Input, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { MiniScoreMeta } from '../../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score-header',
  templateUrl: './nba-mini-score-header.component.html',
  styleUrls: ['./nba-mini-score-header.component.scss'],
})
export class NbaMiniScoreHeaderComponent implements OnInit {
  @Input()
  meta: MiniScoreMeta;
  constructor() {}

  ngOnInit() {}
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
}
