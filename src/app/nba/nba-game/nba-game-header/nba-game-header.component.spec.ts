import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGameHeaderComponent } from './nba-game-header.component';

describe('NbaGameHeaderComponent', () => {
  let component: NbaGameHeaderComponent;
  let fixture: ComponentFixture<NbaGameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGameHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
