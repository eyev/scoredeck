import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMiniScoreHeaderComponent } from './nba-mini-score-header.component';

describe('NbaMiniScoreHeaderComponent', () => {
  let component: NbaMiniScoreHeaderComponent;
  let fixture: ComponentFixture<NbaMiniScoreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaMiniScoreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMiniScoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
