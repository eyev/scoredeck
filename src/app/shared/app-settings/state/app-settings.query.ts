import { Injectable } from '@angular/core';

import { Query } from '@datorama/akita';

import { AppSettings, AppSettingsStore } from './app-settings.store';

@Injectable({ providedIn: 'root' })
export class AppSettingsQuery extends Query<AppSettings> {
  constructor(protected store: AppSettingsStore) {
    super(store);
  }
}
