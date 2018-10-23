import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ID } from '@datorama/akita';

import { MiniScore } from './mini-score.model';
import { MiniScoreStore } from './mini-score.store';

@Injectable({ providedIn: 'root' })
export class MiniScoreService {
  constructor(
    private miniScoreStore: MiniScoreStore,
    private http: HttpClient,
  ) {}

  getDay(date: string) {
    return this.http
      .get<MiniScore>(`http://localhost:3000/preview/${date}`)
      .subscribe(miniScore => this.add(miniScore));
  }

  refreshDay(date: string) {
    return this.http
      .get<MiniScore>(`http://localhost:3000/preview/${date}`)
      .subscribe(miniScore => this.update(miniScore.id, miniScore));
  }

  add(miniScore: MiniScore) {
    this.miniScoreStore.add(miniScore);
  }

  update(id: ID, miniScore: Partial<MiniScore>) {
    this.miniScoreStore.update(id, miniScore);
  }

  remove(id: ID) {
    this.miniScoreStore.remove(id);
  }
}
