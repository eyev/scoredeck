import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { fadeIn } from 'src/app/shared/animation-library';

import { NbaScheduleService } from '../nba-schedule/state/nba-schedule.service';
import { createNbaGame, NbaGame } from './nba-game';
import { NbaGameService } from './nba-game.service';

@Component({
  selector: 'sd-nba-game',
  templateUrl: './nba-game.component.html',
  styleUrls: ['./nba-game.component.scss'],
  animations: [fadeIn],
})
export class NbaGameComponent implements OnInit {
  game: Observable<NbaGame> = of(createNbaGame());
  isLoading = true;
  isLive = false;
  activeGameRefresh: number | undefined = undefined;
  prettyDate: Date = new Date();
  private gameId = '';
  private date = '';

  constructor(
    private route: ActivatedRoute,
    private nbaGameService: NbaGameService,
    private nbaScheduleService: NbaScheduleService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.date = params['date'];
      this.gameId = params['gameId'];
      this.prettyDate = this.nbaScheduleService.convertDateString(this.date);
      this.game = this.loadGame();
    });
  }
  enableGameRefresh() {
    window.clearInterval(this.activeGameRefresh);
    this.activeGameRefresh = window.setInterval(() => {
      this.game = this.loadGame();
    }, 30000);
  }

  loadGame() {
    return this.nbaGameService.getGame(this.date, this.gameId).pipe(
      tap(game => {
        this.isLive = game.meta.isStarted && !game.meta.isComplete;
        if (this.isLive) {
          this.enableGameRefresh();
        } else {
          window.clearInterval(this.activeGameRefresh);
        }
        this.isLoading = false;
      }),
    );
  }
}
