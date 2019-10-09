import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { createMiniScore, MiniScore } from '../nba-mini-score/state/mini-score.model';
import { MiniScoreQuery } from '../nba-mini-score/state/mini-score.query';
import { MiniScoreService } from '../nba-mini-score/state/mini-score.service';
import { NbaSchedule } from '../nba-schedule/nba-schedule';
import { NbaScheduleQuery } from '../nba-schedule/state/nba-schedule.query';
import { NbaScheduleService } from '../nba-schedule/state/nba-schedule.service';

@Component({
  selector: 'sd-nba-home',
  templateUrl: './nba-home.component.html',
  styleUrls: ['./nba-home.component.scss'],
})
export class NbaHomeComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer')
  private scrollContainer: ElementRef;
  schedule: NbaSchedule[] = [];
  days: Observable<MiniScore[]> = of([]);
  activeGames: MiniScore[] | undefined = [createMiniScore({})];
  activeGamesRefresh: number | undefined = undefined;
  isInit = false;

  constructor(
    private scheduleService: NbaScheduleService,
    private scheduleQuery: NbaScheduleQuery,
    private miniScoreService: MiniScoreService,
    private miniScoreQuery: MiniScoreQuery,
    private snackbar: MatSnackBar,
    private appRef: ApplicationRef,
  ) {}

  ngOnInit() {
    this.scheduleService.getSchedule('2019').subscribe(season => {
      this.schedule = season;
      this.scheduleService.setSchedule(season, '2019');
    });

    this.scheduleQuery.selectOnce(schedule => schedule).subscribe(schedule => {
      schedule.loadedGames.forEach(day =>
        this.miniScoreService.getDay(day.apiDate),
      );
    });

    this.days = this.miniScoreQuery.selectAll();
    this.days.subscribe(entity => {
      this.activeGames = entity.filter(
        day =>
          day.games.filter(game => game.meta.isStarted && !game.meta.isComplete)
            .length > 0,
      );

      if (this.activeGames.length > 0) {
        this.setRefresh();
      } else {
        window.clearInterval(this.activeGamesRefresh);
      }
    });
  }

  ngOnDestroy() {}

  setRefresh() {
    this.appRef.isStable.pipe(untilDestroyed(this)).subscribe(ready => {
      if (!ready) {
        return;
      }

      window.clearInterval(this.activeGamesRefresh);

      if (this.activeGames[0].id) {
        this.activeGamesRefresh = window.setInterval(() => {
          this.miniScoreService.refreshDay(this.activeGames[0].id.toString());
        }, 30000);
      }
    });
  }

  getNext() {
    const nextGameId = this.scheduleQuery.getSnapshot().loadedGames[0].id + 1;
    const lastGameId = this.scheduleQuery.getSnapshot().schedule.length;
    if (nextGameId === lastGameId) {
      this.snackbar.open('No future games available', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.scheduleQuery
      .selectOnce(state => state.schedule.filter(day => day.id === nextGameId))
      .subscribe(day => {
        this.scheduleService.setLoadedGames(day[0], true);
        this.miniScoreService.getDay(day[0].apiDate);
      });
  }
  getPrevious() {
    const loadedGames = this.scheduleQuery.getSnapshot().loadedGames;
    const prevGameId = loadedGames[loadedGames.length - 1].id - 1;
    if (prevGameId < 0) {
      this.snackbar.open('No previous games', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.scheduleQuery
      .selectOnce(state => state.schedule.filter(day => day.id === prevGameId))
      .pipe(
        tap(() => {
          this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }),
      )
      .subscribe(day => {
        this.scheduleService.setLoadedGames(day[0], false);
        this.miniScoreService.getDay(day[0].apiDate);
      });
  }

  isLive(dayId: string) {
    return this.activeGames.filter(day => day.id === dayId).length > 0;
  }
}
