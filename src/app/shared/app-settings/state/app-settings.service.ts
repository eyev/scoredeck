import { Injectable } from '@angular/core';

import { AppSettings, AppSettingsStore } from './app-settings.store';

@Injectable({ providedIn: 'root' })
export class AppSettingsService {
  constructor(private appSettingsStore: AppSettingsStore) {}
  set(settings: Partial<AppSettings>) {
    this.appSettingsStore.update(state => {
      window.localStorage.setItem(
        'appSettings',
        JSON.stringify({
          theme: state.theme,
          autoUpdate: state.autoUpdate,
          ...settings,
        }),
      );
      return { state, ...settings };
    });
  }
}
