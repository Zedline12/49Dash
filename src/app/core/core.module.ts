import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { NotificationService } from './services/features/notification.service';
import { SocketService } from './services/features/websockets/socket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentsService } from './services/features/appointments.service';
import { LongRequestService } from './services/features/long-request.service';
import { OperationsService } from './services/features/operations.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [
    AuthGuard,
    NotificationService,
    SocketService,
    AppointmentsService,
    LongRequestService,
    OperationsService,
  ],
})
export class CoreModule {}
