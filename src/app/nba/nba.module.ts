import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NbaDayComponent } from './nba-day/nba-day.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';
import {
    NbaMiniScoreHeaderComponent
} from './nba-mini-score/nba-mini-score-header/nba-mini-score-header.component';
import {
    NbaMiniScoreKeyComponent
} from './nba-mini-score/nba-mini-score-key/nba-mini-score-key.component';
import {
    NbaMiniScoreTeamComponent
} from './nba-mini-score/nba-mini-score-team/nba-mini-score-team.component';
import { NbaMiniScoreComponent } from './nba-mini-score/nba-mini-score.component';
import { NbaRoutingModule } from './nba-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, NbaRoutingModule],
  exports: [],
  declarations: [
    NbaDayComponent,
    NbaMiniScoreComponent,
    NbaHomeComponent,
    NbaMiniScoreHeaderComponent,
    NbaMiniScoreTeamComponent,
    NbaMiniScoreKeyComponent,
  ],
})
export class NbaModule {}
