import { Component, Input, OnInit } from '@angular/core';

import { MiniScoreMeta } from '../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score-footer',
  templateUrl: './nba-mini-score-footer.component.html',
  styleUrls: ['./nba-mini-score-footer.component.scss'],
})
export class NbaMiniScoreFooterComponent {
  @Input()
  meta: MiniScoreMeta;
}
