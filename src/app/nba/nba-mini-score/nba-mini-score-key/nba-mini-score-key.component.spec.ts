import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMiniScoreKeyComponent } from './nba-mini-score-key.component';

describe('NbaMiniScoreKeyComponent', () => {
  let component: NbaMiniScoreKeyComponent;
  let fixture: ComponentFixture<NbaMiniScoreKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaMiniScoreKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMiniScoreKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
