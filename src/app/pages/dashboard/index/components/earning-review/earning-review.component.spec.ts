import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningReviewComponent } from './earning-review.component';

describe('EarningReviewComponent', () => {
  let component: EarningReviewComponent;
  let fixture: ComponentFixture<EarningReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarningReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
