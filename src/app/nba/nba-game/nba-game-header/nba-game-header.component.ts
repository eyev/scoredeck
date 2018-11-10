import { Component, Input, OnInit } from '@angular/core';

import { NbaGame } from '../nba-game';

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
      return '1st';
    }
    if (quarter === 2) {
      return '2nd';
    }
    if (quarter === 3) {
      return '3rd';
    }
    if (quarter === 4 && !this.game.meta.isComplete) {
      return '4th';
    }
    if (quarter === 4 && this.game.meta.isComplete) {
      return 'Final';
    }

    if (quarter > 4 && !this.game.meta.isComplete) {
      return 'OT';
    }
  }
}
