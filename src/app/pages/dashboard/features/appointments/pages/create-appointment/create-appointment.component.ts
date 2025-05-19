import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassportOption } from 'app/core/interfaces/passportOption.interface';
import { ScolarShipType } from 'app/core/interfaces/scolarShipType.interface';
import { AppointmentsService } from 'app/core/services/features/appointments.service';
import { LongRequestService } from 'app/core/services/features/long-request.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.scss',
})
export class CreateAppointmentComponent implements OnInit {
  form: FormGroup;
  isManual = true; // Toggle default state
  campaignOne!: FormGroup;
  campaignTwo!: FormGroup;
  campaignOnePicker: any; // Define this based on your picker reference
  missions:ScolarShipType[] = [
   
  ];

  services:PassportOption[] = [
   
  ];


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private appointmentsService: AppointmentsService,
    private readonly longRequestService: LongRequestService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      mission: [null, Validators.required],
      service: [null, Validators.required],
      transactionCount: [
        null,
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
      processingDate: [null], // Initially hidden
      automatic: true,
    });
    this.campaignOne = this.fb.group({
      start: [new Date()], // Default to today's date
      end: [new Date()], // Default to today's date
    });

    this.campaignTwo = this.fb.group({
      start: [new Date()], // Default to today's date
      end: [new Date()], // Default to today's date
    });
    this.form.get('automatic')?.valueChanges.subscribe((value) => {
      this.toggleProcessingDateValidation(value);
    });
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.appointmentsService.getScholarshipTypes().subscribe({
      next: (response: any) => {
        this.missions = response.data;
      },
      error: (error) => {
        this.toastr.error('Error loading scholarship types');
      }
    });

    this.appointmentsService.getPassportOptions().subscribe({
      next: (response: any) => {
        this.services = response.data;
    
      },
      error: (error) => {
        this.toastr.error('Error loading passport options');
      }
    });
  }
  getMissionValue(): number {
    return Number(this.form.value.mission);
  }

  toggleProcessingDateValidation(isAutomatic: boolean) {
    const processingDateControl = this.form.get('processingDate');
    if (!isAutomatic) {
      processingDateControl?.setValidators([Validators.required]); // Make required when automatic is false
    } else {
      processingDateControl?.clearValidators(); // Remove required when automatic is true
      processingDateControl?.setValue(null); // Reset value
    }
    processingDateControl?.updateValueAndValidity(); // Update form validation
  }

  toggleManual(event: any) {
    this.isManual = event.checked;
    if (this.isManual) {
      this.form.get('processingDate')?.setValue(null);
    }
  }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      const { email, password, mission, service, transactionCount, automatic,processingDate } =
        this.form.value;

      this.appointmentsService
        .createAppointment({
          email,
          password,
          scholarshipType: mission,
          passportOption: service,
          transactionsCount: transactionCount,
          isDateAutomatic: automatic,
          reservationDate:processingDate
        })
        .subscribe((data) => {
          console.log(data)
          this.router.navigate(['/']);
        }, (err) => {
          this.toastr.error(err.error.message);
        });
    } else {
    }
  }
}
