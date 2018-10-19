import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniScoreComponent } from './mini-score.component';

describe('MiniScoreComponent', () => {
  let component: MiniScoreComponent;
  let fixture: ComponentFixture<MiniScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
