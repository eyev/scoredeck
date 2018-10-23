import { Component, Input, OnInit } from '@angular/core';

import { MiniScoreGame } from '../state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score',
  templateUrl: './nba-mini-score.component.html',
  styleUrls: ['./nba-mini-score.component.scss'],
})
export class NbaMiniScoreComponent implements OnInit {
  @Input()
  game: MiniScoreGame;
  constructor() {}

  ngOnInit() {}

  isHomeWinner() {
    if (!this.game.meta.isComplete) {
      return false;
    }
    return +this.game.home.total > +this.game.away.total;
  }
}
