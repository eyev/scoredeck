import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGameComponent } from './nba-game.component';

describe('NbaGameComponent', () => {
  let component: NbaGameComponent;
  let fixture: ComponentFixture<NbaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
