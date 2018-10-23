import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaDayComponent } from './nba-day.component';

describe('NbaDayComponent', () => {
  let component: NbaDayComponent;
  let fixture: ComponentFixture<NbaDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
