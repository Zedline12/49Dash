import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './appointments/pages/create-appointment/create-appointment.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CoreModule } from 'app/core/core.module';
import { OperationsComponent } from './operations/operations.component';
import { SuccessAppointmentsComponent } from './success-appointments/success-appointments.component';
@NgModule({
  declarations: [
    IndexComponent,
    AppointmentsComponent,
    CreateAppointmentComponent,
    OperationsComponent,
    SuccessAppointmentsComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    MatButtonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    SharedModule
  ],
  exports: [],
  providers: [provideNativeDateAdapter()], // Toastr providers],
})
export class FeaturesModule {}
