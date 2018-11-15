import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { NbaGame } from './nba-game';

@Injectable({
  providedIn: 'root',
})
export class NbaGameService {
  constructor(private http: HttpClient) {}
  getGame(date: string, id: string) {
    return this.http.get<NbaGame>(`${environment.apiUrl}detail/${date}/${id}`);
  }
}
