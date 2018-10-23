import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaHomeComponent } from './nba-home.component';

describe('NbaHomeComponent', () => {
  let component: NbaHomeComponent;
  let fixture: ComponentFixture<NbaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
