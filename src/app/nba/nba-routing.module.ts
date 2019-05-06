import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbaGamePbpComponent } from './nba-game/nba-game-pbp/nba-game-pbp.component';
import { NbaGameStatsComponent } from './nba-game/nba-game-stats/nba-game-stats.component';
import { NbaGameComponent } from './nba-game/nba-game.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NbaHomeComponent },
  {
    path: 'game/:date/:gameId',
    component: NbaGameComponent,
    children: [
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full',
      },
      {
        path: 'stats',
        component: NbaGameStatsComponent,
      },
      {
        path: 'pbp',
        component: NbaGamePbpComponent,
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class NbaRoutingModule {}
