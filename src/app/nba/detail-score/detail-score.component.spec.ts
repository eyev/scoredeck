import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScoreComponent } from './detail-score.component';

describe('DetailScoreComponent', () => {
  let component: DetailScoreComponent;
  let fixture: ComponentFixture<DetailScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
