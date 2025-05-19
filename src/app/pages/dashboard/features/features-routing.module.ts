import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './appointments/pages/create-appointment/create-appointment.component';
import { OperationsComponent } from './operations/operations.component';
import { AppointmentsFileUploadComponent } from './appointments-file-upload/appointments-file-upload.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessAppointmentsComponent } from './success-appointments/success-appointments.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'appointments/create',
    component: CreateAppointmentComponent,
  },
  {
    path: 'appointments/upload',
    component: AppointmentsFileUploadComponent,
  },
  {
    path: 'operations',
    component: OperationsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'success',
    component: SuccessAppointmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
