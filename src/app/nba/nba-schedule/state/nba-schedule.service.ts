import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { NbaSchedule } from '../nba-schedule';
import { createInitialState, NbaScheduleStore } from './nba-schedule.store';

@Injectable({ providedIn: 'root' })
export class NbaScheduleService {
  constructor(
    private nbaScheduleStore: NbaScheduleStore,
    private http: HttpClient,
  ) {}

  getSchedule(year: string): Observable<NbaSchedule[]> {
    return this.http.get<NbaSchedule[]>(
      `http://localhost:3000/schedule/${year}`,
    );
  }

  setSchedule(schedule: NbaSchedule[], year) {
    const closestDay = this.getNearestGame(schedule);
    const initialDays = [
      schedule[schedule.indexOf(closestDay) - 1],
      schedule[schedule.indexOf(closestDay) - 2],
      schedule[schedule.indexOf(closestDay) - 3],
      schedule[schedule.indexOf(closestDay) - 4],
      schedule[schedule.indexOf(closestDay) - 5],
      schedule[schedule.indexOf(closestDay) - 6],
    ];

    this.nbaScheduleStore.setState(state =>
      createInitialState({
        schedule,
        loadedGames: initialDays,
        year,
      }),
    );
  }
  getNearestGame(season: NbaSchedule[]) {
    const today = new Date();

    const closest = season.reduce((a, b) => {
      const adiff = new Date(a.date).getTime() - today.getTime();
      return adiff > 0 && adiff < new Date(b.date).getTime() - today.getTime()
        ? a
        : b;
    });
    return closest;
  }

  convertDateString(date: string): Date {
    // assumes YYYYMMDD format
    const year = +date.substr(0, 4);
    const month = +date.substr(4, 2);
    const day = +date.substr(6, 2);
    return new Date(year, month - 1, day);
  }
}
