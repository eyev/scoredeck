import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbaHomeComponent } from './nba-home/nba-home.component';

const routes: Routes = [{ path: '', component: NbaHomeComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class NbaRoutingModule {}
