import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGameBoxScoreComponent } from './nba-game-box-score.component';

describe('NbaGameBoxScoreComponent', () => {
  let component: NbaGameBoxScoreComponent;
  let fixture: ComponentFixture<NbaGameBoxScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGameBoxScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGameBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
