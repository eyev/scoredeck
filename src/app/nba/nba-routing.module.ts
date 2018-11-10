import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbaGameComponent } from './nba-game/nba-game.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NbaHomeComponent },
  {
    path: 'game/:date/:gameId',
    component: NbaGameComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class NbaRoutingModule {}
