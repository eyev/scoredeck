import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { createNbaGame, NbaGame } from './nba-game.model';
import { NbaGameStore } from './nba-game.store';

@Injectable({ providedIn: 'root' })
export class NbaGameService {
  constructor(private nbaGameStore: NbaGameStore, private http: HttpClient) {}
  getGame(date: string, id: string) {
    return this.http
      .get<NbaGame>(`${environment.apiUrl}detail/${date}/${id}`)
      .pipe(tap(game => this.nbaGameStore.setState(() => game)));
  }

  reset() {
    this.nbaGameStore.setState(() => createNbaGame());
  }
}
