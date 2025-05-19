import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'app/core/interfaces/reservation.interface';
import { ReservationProcessState } from 'app/core/services/features/appointments.service';
import { OperationsService } from 'app/core/services/features/operations.service';
// import {  SocketService } from 'app/core/services/features/websockets/socket.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss',
})
export class OperationsComponent implements OnInit {
  operations: ({ user: { email: string } } & Omit<Reservation, 'user'>)[] = []
  totalSteps:number = 5;
  currentStep:number = 0;
  constructor(
    private readonly operationsService: OperationsService,
    // private  readonly socketService: SocketService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.operationsService.getActiveOperations().subscribe((data) => {
      this.operations = data.data
    });
  //   this.socketService.onEvent("d").subscribe((data) => {
  //     if(data.ReservationProcessState==ReservationProcessState['تم حجز المعاملة']) this.router.navigate(['/appointments'])
  //     this.updateOperationsProcessesStates(data)
  //  });
    // this.operationsService.onOperationsUpdates().subscribe((data) => {
    //   console.log(data);
    // });
  }
  updateOperationsProcessesStates(newData: { ReservationId: string, ReservationProcessState: number }) {
   const index=this.operations.findIndex((operation) => operation._id === newData.ReservationId)
  //  this.operations[index].processState = newData.ReservationProcessState
    if(this.currentStep+1==newData.ReservationProcessState) this.currentStep++
  }
  getProcessStateText(stateNumber:number) {
    return ReservationProcessState[stateNumber]
  }
}
