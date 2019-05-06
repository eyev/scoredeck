import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

import { AppSettings, AppSettingsStore } from './app-settings.store';

@Injectable({ providedIn: 'root' })
export class AppSettingsService {
  constructor(
    private appSettingsStore: AppSettingsStore,
    private overlayContainer: OverlayContainer,
  ) {}
  set(settings: Partial<AppSettings>) {
    if (settings.theme === 'light') {
      this.overlayContainer.getContainerElement().classList.add('day-theme');
    }
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
