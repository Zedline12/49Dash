import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/core/interfaces/reservation.interface';
import { AppointmentsService } from 'app/core/services/features/appointments.service';

@Component({
  selector: 'app-success-appointments',
  templateUrl: './success-appointments.component.html',
  styleUrl: './success-appointments.component.scss',
})
export class SuccessAppointmentsComponent implements OnInit {
  appointments: Reservation[] = [];
  constructor(private readonly appointmentsService: AppointmentsService) {}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.appointmentsService.getSuccessAppointments().subscribe((data) => {
      console.log(data.data);
      this.appointments = data.data;
    });
  }
}
