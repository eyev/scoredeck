import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMiniScoreFooterComponent } from './nba-mini-score-footer.component';

describe('NbaMiniScoreFooterComponent', () => {
  let component: NbaMiniScoreFooterComponent;
  let fixture: ComponentFixture<NbaMiniScoreFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaMiniScoreFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMiniScoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
