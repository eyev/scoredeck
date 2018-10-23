import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMiniScoreComponent } from './nba-mini-score.component';

describe('NbaMiniScoreComponent', () => {
  let component: NbaMiniScoreComponent;
  let fixture: ComponentFixture<NbaMiniScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NbaMiniScoreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMiniScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
