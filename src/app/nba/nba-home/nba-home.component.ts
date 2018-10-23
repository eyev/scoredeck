import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NbaSchedule } from '../nba-schedule/nba-schedule';
import { NbaScheduleService } from '../nba-schedule/nba-schedule.service';
import { createMiniScore, MiniScore } from '../state/mini-score.model';
import { MiniScoreQuery } from '../state/mini-score.query';
import { MiniScoreService } from '../state/mini-score.service';

@Component({
  selector: 'sd-nba-home',
  templateUrl: './nba-home.component.html',
  styleUrls: ['./nba-home.component.scss'],
})
export class NbaHomeComponent implements OnInit {
  schedule: NbaSchedule[] = [];
  days: Observable<MiniScore[]> = of([]);
  activeGames: MiniScore[] | undefined = [createMiniScore({})];
  activeGamesRefresh: number | undefined = undefined;

  constructor(
    private scheduleService: NbaScheduleService,
    private miniScoreService: MiniScoreService,
    private miniScoreQuery: MiniScoreQuery,
  ) {}

  ngOnInit() {
    this.scheduleService.getSchedule('2019').subscribe(season => {
      // this.scheduleService.setSchedule(season, '2019');
      this.schedule = season;
      if (this.miniScoreQuery.getSnapshot().ids.length === 0) {
        const closestDay = this.scheduleService.getNearestGame(season);
        const initialDays = [
          this.schedule[this.schedule.indexOf(closestDay) - 1],
          this.schedule[this.schedule.indexOf(closestDay) - 2],
          this.schedule[this.schedule.indexOf(closestDay) - 3],
          this.schedule[this.schedule.indexOf(closestDay) - 4],
          this.schedule[this.schedule.indexOf(closestDay) - 5],
          this.schedule[this.schedule.indexOf(closestDay) - 6],
        ];
        initialDays.forEach(day => {
          if (day) {
            this.miniScoreService.getDay(day.apiDate);
          }
        });
      }
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

  setRefresh() {
    console.log(this.activeGames);
    window.clearInterval(this.activeGamesRefresh);

    if (this.activeGames[0].id) {
      this.activeGamesRefresh = window.setInterval(() => {
        this.miniScoreService.refreshDay(this.activeGames[0].id.toString());
      }, 30000);
    }
  }

  isLive(dayId: string) {
    return this.activeGames.filter(day => day.id === dayId).length > 0;
  }
}
