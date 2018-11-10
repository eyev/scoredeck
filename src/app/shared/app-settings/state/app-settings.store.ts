import { Injectable } from '@angular/core';

import { Store, StoreConfig } from '@datorama/akita';

export interface AppSettings {
  theme: string;
  autoUpdate: boolean;
}

export function createInitialState(): AppSettings {
  return {
    theme: 'dark',
    autoUpdate: true,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app-settings' })
export class AppSettingsStore extends Store<AppSettings> {
  constructor() {
    super(createInitialState());
  }
}
