import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'sd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public loader: LoadingBarService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
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
}
