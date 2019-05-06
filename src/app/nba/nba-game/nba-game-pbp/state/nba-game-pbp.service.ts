import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { combineLatest, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { createNbaPbpState, NbaGamePbp, NbaGamePbpStore } from './nba-game-pbp.store';

@Injectable({ providedIn: 'root' })
export class NbaGamePbpService {
  constructor(
    private nbaGamePbpStore: NbaGamePbpStore,
    private http: HttpClient,
    private snackbar: MatSnackBar,
  ) {}
  get(quarter: string, gameId: string, date: string) {
    this.nbaGamePbpStore.setLoading(true);
    return this.http
      .get<{ plays: NbaGamePbp[] }>(
        `${environment.apiUrl}pbp/${date}/${gameId}/${quarter}`,
      )
      .pipe(
        map(pbp =>
          this.nbaGamePbpStore.setState(state => {
            const newState = {
              ...state,
            };
            newState[quarter] = pbp.plays;
            return newState;
          }),
        ),
        tap(() => this.nbaGamePbpStore.setLoading(false)),
        catchError(err => {
          this.snackbar.open('Unable to load play by play.');
          console.error(err);
          return err;
        }),
      );
  }

  getOvertime(quarters: string[], gameId: string, date: string) {
    this.nbaGamePbpStore.setLoading(true);
    return combineLatest(
      quarters.map(quarter => {
        return this.http.get<{ plays: NbaGamePbp[] }>(
          `${environment.apiUrl}pbp/${date}/${gameId}/${quarter}`,
        );
      }),
    ).pipe(
      map(quarterz => {
        const plays = [];
        quarterz.forEach(otQuarter => plays.push(otQuarter.plays));
        const merged = [].concat.apply([], plays);
        this.nbaGamePbpStore.setState(state => {
          const newState = {
            ...state,
          };
          newState[5] = merged;
          return newState;
        });
      }),
      tap(() => this.nbaGamePbpStore.setLoading(false)),
      catchError(err => {
        this.snackbar.open('Unable to load play by play.');
        console.error(err);
        return err;
      }),
    );

    return of();
  }

  reset() {
    this.nbaGamePbpStore.setState(() => createNbaPbpState());
  }
}
