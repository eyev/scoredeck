import { Component, Input, OnInit } from '@angular/core';

import { teamOnFire } from '../on-fire-key';
import { NbaGameTeamStats } from '../state/nba-game.model';

@Component({
  selector: 'sd-nba-game-team-stats',
  templateUrl: './nba-game-team-stats.component.html',
  styleUrls: ['./nba-game-team-stats.component.scss'],
})
export class NbaGameTeamStatsComponent implements OnInit {
  @Input()
  stats: NbaGameTeamStats;
  constructor() {}

  ngOnInit() {}
  isLit(key: string, value: string): boolean {
    return +value > teamOnFire[key];
  }
}
