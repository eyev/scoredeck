import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';

import { LoadingBarService } from '@ngx-loading-bar/core';

import { AppSettingsQuery } from './shared/app-settings/state/app-settings.query';
import { AppSettingsService } from './shared/app-settings/state/app-settings.service';
import { AppSettings } from './shared/app-settings/state/app-settings.store';

@Component({
  selector: 'sd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogoActive = false;
  appSettings: Observable<AppSettings> = of();

  constructor(
    public loader: LoadingBarService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private appSettingsService: AppSettingsService,
    private appSettingsQuery: AppSettingsQuery,
  ) {
    this.matIconRegistry.addSvgIcon(
      'nfl',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/nfl/football.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'nba',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/nba/basketball.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'mlb',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/mlb/baseball.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'csgo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/csgo/csgo.svg',
      ),
    );
  }

  ngOnInit() {
    this.appSettings = this.appSettingsQuery.select();
  }

  toggleTheme(theme: string) {
    this.appSettingsService.set({
      theme,
    });
  }

  toggleLogoActive(active: boolean) {
    this.isLogoActive = active;
  }
}
