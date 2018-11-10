import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbaHomeComponent } from './nba/nba-home/nba-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nba/home',
    pathMatch: 'full',
  },
  {
    path: 'nba',
    loadChildren: './nba/nba.module#NbaModule',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
