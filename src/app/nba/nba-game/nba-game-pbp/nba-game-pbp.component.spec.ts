import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGamePbpComponent } from './nba-game-pbp.component';

describe('NbaGamePbpComponent', () => {
  let component: NbaGamePbpComponent;
  let fixture: ComponentFixture<NbaGamePbpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGamePbpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGamePbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
