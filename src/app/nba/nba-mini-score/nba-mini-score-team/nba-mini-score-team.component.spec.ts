import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMiniScoreTeamComponent } from './nba-mini-score-team.component';

describe('NbaMiniScoreTeamComponent', () => {
  let component: NbaMiniScoreTeamComponent;
  let fixture: ComponentFixture<NbaMiniScoreTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaMiniScoreTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMiniScoreTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
