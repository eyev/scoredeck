import { Component, Input, OnInit } from '@angular/core';

import { NbaGameTeamStats } from '../nba-game';
import { teamOnFire } from '../on-fire-key';

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
