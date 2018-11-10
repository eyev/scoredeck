import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGameTeamStatsComponent } from './nba-game-team-stats.component';

describe('NbaGameTeamStatsComponent', () => {
  let component: NbaGameTeamStatsComponent;
  let fixture: ComponentFixture<NbaGameTeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGameTeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGameTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
