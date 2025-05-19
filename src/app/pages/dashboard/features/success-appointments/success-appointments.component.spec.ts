import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAppointmentsComponent } from './success-appointments.component';

describe('SuccessAppointmentsComponent', () => {
  let component: SuccessAppointmentsComponent;
  let fixture: ComponentFixture<SuccessAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
