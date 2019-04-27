import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { MiniScoreGame } from './state/mini-score.model';

@Component({
  selector: 'sd-nba-mini-score',
  templateUrl: './nba-mini-score.component.html',
  styleUrls: ['./nba-mini-score.component.scss'],
})
export class NbaMiniScoreComponent implements OnInit {
  @Input()
  game: MiniScoreGame;

  @Input()
  date: string;
  constructor(private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit() {}

  isHomeWinner() {
    if (!this.game.meta.isComplete) {
      return false;
    }
    return +this.game.home.total > +this.game.away.total;
  }

  click(id: string) {
    if (!this.game.meta.isStarted && !this.game.meta.isComplete) {
      this.snackbar.open('Game has not started yet', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.router.navigate(['/nba/game', this.date, this.game.meta.gameId]);
  }
}
