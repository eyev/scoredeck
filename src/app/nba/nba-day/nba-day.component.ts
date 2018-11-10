import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { MiniScore } from '../nba-mini-score/state/mini-score.model';
import { NbaScheduleService } from '../nba-schedule/nba-schedule.service';

@Component({
  selector: 'sd-nba-day',
  templateUrl: './nba-day.component.html',
  styleUrls: ['./nba-day.component.scss'],
})
export class NbaDayComponent implements OnInit {
  @Input()
  day: MiniScore;
  @Input()
  isLive = false;

  date: Date | undefined = undefined;
  constructor(private nbaScheduleService: NbaScheduleService) {}

  ngOnInit() {
    this.date = this.nbaScheduleService.convertDateString(
      this.day.id.toString(),
    );
  }
}
