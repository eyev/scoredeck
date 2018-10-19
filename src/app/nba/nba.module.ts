import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailScoreComponent } from './detail-score/detail-score.component';
import { HomeComponent } from './home/home.component';
import { MiniScoreComponent } from './mini-score/mini-score.component';

@NgModule({
  imports: [CommonModule],
  exports: [HomeComponent],
  declarations: [HomeComponent, MiniScoreComponent, DetailScoreComponent],
})
export class NbaModule {}
