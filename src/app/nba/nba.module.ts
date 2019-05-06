import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NbaDayComponent } from './nba-day/nba-day.component';
import {
    NbaGameBoxScoreComponent
} from './nba-game/nba-game-box-score/nba-game-box-score.component';
import { NbaGameHeaderComponent } from './nba-game/nba-game-header/nba-game-header.component';
import { NbaGamePbpComponent } from './nba-game/nba-game-pbp/nba-game-pbp.component';
import { NbaGameStatsComponent } from './nba-game/nba-game-stats/nba-game-stats.component';
import {
    NbaGameTeamStatsComponent
} from './nba-game/nba-game-team-stats/nba-game-team-stats.component';
import { NbaGameComponent } from './nba-game/nba-game.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';
import {
    NbaMiniScoreFooterComponent
} from './nba-mini-score/nba-mini-score-footer/nba-mini-score-footer.component';
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
    NbaGameComponent,
    NbaGameHeaderComponent,
    NbaGameBoxScoreComponent,
    NbaGameTeamStatsComponent,
    NbaMiniScoreFooterComponent,
    NbaGameStatsComponent,
    NbaGamePbpComponent,
  ],
})
export class NbaModule {}
