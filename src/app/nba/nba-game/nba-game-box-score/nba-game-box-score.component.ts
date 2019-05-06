import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { playerOnFire } from '../on-fire-key';
import { NbaGamePlayer } from '../state/nba-game.model';

@Component({
  selector: 'sd-nba-game-box-score',
  templateUrl: './nba-game-box-score.component.html',
  styleUrls: ['./nba-game-box-score.component.scss'],
})
export class NbaGameBoxScoreComponent implements OnChanges, OnInit {
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
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.players);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get teamName() {
    return this.team.substring(this.team.lastIndexOf(' ') + 1);
  }
  isLit(key: string, value: string): boolean {
    return +value > playerOnFire[key];
  }
}
