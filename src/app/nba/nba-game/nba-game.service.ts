import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NbaGame } from './nba-game';

@Injectable({
  providedIn: 'root',
})
export class NbaGameService {
  constructor(private http: HttpClient) {}
  getGame(date: string, id: string) {
    return this.http.get<NbaGame>(`http://localhost:3000/detail/${date}/${id}`);
  }
}
