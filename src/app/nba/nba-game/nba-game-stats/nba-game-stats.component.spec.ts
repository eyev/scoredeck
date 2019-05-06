import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGameStatsComponent } from './nba-game-stats.component';

describe('NbaGameStatsComponent', () => {
  let component: NbaGameStatsComponent;
  let fixture: ComponentFixture<NbaGameStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGameStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGameStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
