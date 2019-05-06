import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { fadeIn } from 'src/app/shared/animation-library';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { NbaGame } from './state/nba-game.model';
import { NbaGameQuery } from './state/nba-game.query';
import { NbaGameService } from './state/nba-game.service';

@Component({
  selector: 'sd-nba-game',
  templateUrl: './nba-game.component.html',
  styleUrls: ['./nba-game.component.scss'],
  animations: [fadeIn],
})
export class NbaGameComponent implements OnInit, OnDestroy {
  game = of<NbaGame>();
  isLoading = true;
  activeGameRefresh: number | undefined = undefined;

  private gameId = '';
  date = '';
  navLinks = [
    {
      path: './stats',
      label: 'Game Stats',
    },
    {
      path: './pbp',
      label: 'Play by Play',
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private nbaGameService: NbaGameService,
    private appRef: ApplicationRef,
    private gameQuery: NbaGameQuery,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.date = params['date'];
      this.gameId = params['gameId'];
      this.loadGame();
    });
  }

  ngOnDestroy() {
    this.nbaGameService.reset();
  }

  enableGameRefresh() {
    this.appRef.isStable.pipe(untilDestroyed(this)).subscribe(ready => {
      if (!ready) {
        return;
      }
      window.clearInterval(this.activeGameRefresh);
      this.activeGameRefresh = window.setInterval(() => {
        this.loadGame();
      }, 30000);
    });
  }

  loadGame() {
    this.nbaGameService
      .getGame(this.date, this.gameId)
      .pipe(
        tap(game => {
          if (game.meta.isStarted && !game.meta.isComplete) {
            this.enableGameRefresh();
          } else {
            window.clearInterval(this.activeGameRefresh);
          }
          this.isLoading = false;
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
