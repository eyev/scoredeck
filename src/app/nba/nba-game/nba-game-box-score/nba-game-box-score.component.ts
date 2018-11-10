import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { NbaGamePlayer } from '../nba-game';

@Component({
  selector: 'sd-nba-game-box-score',
  templateUrl: './nba-game-box-score.component.html',
  styleUrls: ['./nba-game-box-score.component.scss'],
})
export class NbaGameBoxScoreComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;
  @Input()
  players: NbaGamePlayer[];
  @Input()
  team: string;
  dataSource: MatTableDataSource<NbaGamePlayer> = new MatTableDataSource();
  displayedColumns = [
    'shortName',
    'min',
    'points',
    'tpm',
    'fgm',
    'totReb',
    'offReb',
    'defReb',
    'assists',
    'steals',
    'turnovers',
    'blocks',
    'pFouls',
    'plusMinus',
  ];
  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.players);
    this.dataSource.sort = this.sort;
  }
  get teamName() {
    return this.team.substring(this.team.lastIndexOf(' ') + 1);
  }
}
