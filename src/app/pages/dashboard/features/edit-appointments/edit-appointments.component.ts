import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Reservation } from 'app/core/interfaces/reservation.interface';
import { AppointmentsService } from 'app/core/services/features/appointments.service';
import { PassportOption } from 'app/core/interfaces/passportOption.interface';
import { ScolarShipType } from 'app/core/interfaces/scolarShipType.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-appointments',
  templateUrl: './edit-appointments.component.html',
  styleUrls: ['./edit-appointments.component.scss'],
})
export class EditAppointmentsComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation | null = null;
  showEditModal = false;
  editedReservation: Partial<Reservation> = {};
  hasChanges = false;
  passportOptions: PassportOption[] = [];
  scholarshipTypes: ScolarShipType[] = [];
  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.appointmentsService.getAllApointments().subscribe({
      next: (reservations: any) => {
        console.log(reservations.data);
        this.reservations = reservations.data;
      },
      error: (error: Error) => {
        console.error('Error loading reservations:', error);
      },
    });
    this.appointmentsService.getScholarshipTypes().subscribe({
      next: (response: any) => {
        console.log(response.data);
        this.scholarshipTypes = response.data;
      },
      error: (error) => {
        console.error('Error loading scholarship types:', error);
      },
    });
    this.appointmentsService.getPassportOptions().subscribe({
      next: (response: any) => {
        this.passportOptions = response.data;
      },
      error: (error) => {
        console.error('Error loading passport options:', error);
      },
    });
  }

  onRowClick(reservation: Reservation) {
    this.selectedReservation = reservation;
    this.editedReservation = { ...reservation };
    this.showEditModal = true;
    this.hasChanges = false;
  }

  onInputChange() {
    this.hasChanges = this.hasFormChanges();
  }
  setAutomaticDate() {
    this.editedReservation.isDateAutomatic=true
    this.editedReservation.reservationDate=null
   }
  hasFormChanges(): boolean {
    if (!this.selectedReservation) return false;

    return Object.keys(this.editedReservation).some((key) => {
      const typedKey = key as keyof Reservation;
      return (
        this.editedReservation[typedKey] !== this.selectedReservation![typedKey]
      );
    });
  }
 
  onSubmit() {
   // if (!this.selectedReservation || !this.hasChanges) return;
    console.log(this.editedReservation);
    this.appointmentsService
      .updateReservation(this.selectedReservation?._id!, {
        email: this.editedReservation.email,
        password: this.editedReservation.password,
        scholarshipType: (this.editedReservation.scholarshipType! as ScolarShipType)._id,
        passportOption: (this.editedReservation.passportOption! as PassportOption)._id,
        transactionsCount: Number(this.editedReservation.transactionsCount),
        reservationDate: this.editedReservation.reservationDate
      })
      .subscribe({
        next: () => {
          this.showEditModal = false;
          this.loadData();
        },
        error: (error: Error) => {
          console.error( error);
        },
      });
  }
}
