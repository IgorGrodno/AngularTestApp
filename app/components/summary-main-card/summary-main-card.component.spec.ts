import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryMainCardComponent } from './summary-main-card.component';

describe('SummaryMainCardComponent', () => {
  let component: SummaryMainCardComponent;
  let fixture: ComponentFixture<SummaryMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryMainCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
