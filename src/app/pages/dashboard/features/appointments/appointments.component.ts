import { Component, OnInit } from '@angular/core';
import { PassportOption } from 'app/core/interfaces/passportOption.interface';
import { Reservation } from 'app/core/interfaces/reservation.interface';
import { ScolarShipType } from 'app/core/interfaces/scolarShipType.interface';
import {
  AppointmentsService,
  ReservationState,
} from 'app/core/services/features/appointments.service';
import { SocketService } from 'app/core/services/features/websockets/socket.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  private audio: HTMLAudioElement;
  constructor(
    public appointmentsService: AppointmentsService,
    private socketService: SocketService
  ) {
    this.audio = new Audio('assets/mp3/alert.wav');
  }
  appointments: Reservation[] = [];
  errorAppointments: Reservation[] = [];
  colors = ['blue', 'yellow', 'green'];
  totalSteps: number = 3;
  currentStep: number = 0;
  showSuccessModal!: boolean;
  currentReservedUser!: string;
  appointmentsData: {
    reservationId: string;
    message: string;
    currentStep: number;
    isError: boolean;
    index: number;
    repeat: number;
  }[] = [];
  selectedReservation: Reservation | null = null;
  showEditModal = false;
  editedReservation: Partial<Reservation> = {};
  hasChanges = false;
  passportOptions: PassportOption[] = [];
  scholarshipTypes: ScolarShipType[] = [];
  chunks: any[] = [];
  //for chunks interval values
  chunkIntervals: { [index: number]: string } = {};
  settings!: {
    proxyUsername: string;
    proxyPassword: string;
    chunks: { _id: string; size: number; interval: number }[];
    isProxy: boolean;
  };
  async loadData(): Promise<void> {
    await this.appointmentsService.getAllApointments().subscribe((data) => {
      this.appointments = data.data;
      this.appointmentsService.getSettings().subscribe(async (data) => {
        this.settings = data.data;
        console.log(this.settings.chunks);
        const chunks = await this.splitIntoChunks(
          this.appointments,
          this.settings.chunks
        );
        this.chunks = chunks;
      });
      this.appointmentsService.getAllChunks().subscribe((data) => {
        let indexNum = -1;
        // this.getChunkSizes(this.appointments.length, this.settings.chunksSizes).forEach((size, index) => {
        //   const chunkIntervalIndex =indexNum +size;
        //   this.chunkIntervals[chunkIntervalIndex] = String(this.chunks[index].chunkInterval);
        //   indexNum=chunkIntervalIndex
        // })
      });
    });

    this.appointmentsService
      .onAppointmentProcessCreation()
      .subscribe((data) => {
        this.updateOperationsProcessesStates(data);
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
  private playAlertSound(): void {
    this.audio.play().catch((error) => {
      console.error('Error playing alert sound:', error);
    });
  }

  startReservations() {
    this.appointmentsService.startReservations().subscribe((d) => {});
  }
  stopReservations() {
    this.socketService.sendMessage('shutdown', '');
  }
  chunksSizesSubmit(chunksSizes: string) {
    this.appointmentsService
      .updateChunksSizes(Number(chunksSizes))
      .subscribe((d) => {
        this.loadData();
      });
  }
  async splitIntoChunks(
    arr: any[],
    chunks: { _id: string; size: number; interval: number }[]
  ) {
    let startIndex = 0;
    console.log(arr, chunks);
    const result = [];
    for (let chunk of chunks) {
      result.push({
        _id: chunk._id,
        interval: chunk.interval,
        data: arr.slice(startIndex, startIndex + chunk.size),
      });
      startIndex = startIndex + chunk.size;
    }
    return result;
  }

  submitChunkInterval(chunkId: string, data: any) {
    console.log(chunkId);
    const interval = Number(data);
    this.appointmentsService.updateChunk(chunkId, interval).subscribe((d) => {
      this.loadData();
    });
  }
  //like the first four will carry 3 and the fifth will carry
  getChunkSizes(totalReservations: number, chunkSize: number): number[] {
    const chunkSizes: number[] = [];
    let remaining = totalReservations;

    while (remaining > 0) {
      const size = Math.min(chunkSize, remaining);
      chunkSizes.push(size);
      remaining -= size;
    }

    return chunkSizes;
  }
  checkExtraInput(index: number) {
    // return (!Number.isInteger(this.appointments.length / this.settings.chunksSizes)) && ( index + 1 == this.appointments.length);
    return 1;
  }
  onRowClick(reservation: Reservation) {
    this.selectedReservation = reservation;
    this.editedReservation = { ...reservation };
    this.showEditModal = true;
    this.hasChanges = false;
  }
  updateIsProxy(event: any) {
    this.appointmentsService
      .editSettings({ isProxy: event.checked })
      .subscribe((d) => {});
    this.loadData();
  }
  onInputChange() {
    this.hasChanges = this.hasFormChanges();
  }
  setAutomaticDate() {
    this.editedReservation.isDateAutomatic = true;
    this.editedReservation.reservationDate = null;
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

  onIntervalSubmit(reservationId: string, interval: string) {
    this.appointmentsService
      .updateReservation(reservationId, {
        interval: Number(interval),
      })
      .subscribe((data) => {
        this.loadData();
      });
  }
  downloadExcel() {
    window.location.href = 'http://localhost:3001/reservations/export';
    // this.appointmentsService.downloadExcel().subscribe((e) => {

    // })
  }
  onSubmit() {
    // if (!this.selectedReservation || !this.hasChanges) return;
    console.log(this.editedReservation);
    this.appointmentsService
      .updateReservation(this.selectedReservation?._id!, {
        email: this.editedReservation.email,
        password: this.editedReservation.password,
        scholarshipType: (
          this.editedReservation.scholarshipType! as ScolarShipType
        )._id,
        passportOption: (
          this.editedReservation.passportOption! as PassportOption
        )._id,
        transactionsCount: Number(this.editedReservation.transactionsCount),
        reservationDate: this.editedReservation.reservationDate,
        isDateAutomatic: this.editedReservation.isDateAutomatic,
      })
      .subscribe({
        next: () => {
          this.showEditModal = false;
          this.loadData();
        },
        error: (error: Error) => {
          console.error(error);
        },
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
  onModalClose() {
    this.audio.pause();
    this.showSuccessModal = false;
  }
  async deleteReservation(id: string) {
    console.log(id);
    await this.appointmentsService.deleteReservation(id).subscribe((x) => {
      this.loadData();
    });
  }
  getStateText(stateNumber: number) {
    return ReservationState[stateNumber];
  }
  getInformation(id: string): {
    reservationId: string;
    message: string;
    currentStep: number;
    isError: boolean;
    index: number;
  } {
    return (
      this.appointmentsData.find((data) => data.reservationId == id) ?? {
        reservationId: '',
        currentStep: 0,
        message: '',
        isError: false,
        index: 0,
      }
    );
  }
  deleteAllReservations() {
    return this.appointmentsService
      .deleteAllReservations()
      .subscribe((data) => {
        this.loadData();
      });
  }
  updateOperationsProcessesStates(data: any) {
    console.log(data);
    const index = this.appointments.findIndex(
      (operation) => operation._id == data.reservationId
    );

    this.appointments[index].processState = data.message;
    const currentIndex = this.appointmentsData.findIndex(
      (app) => app.reservationId == data.reservationId
    );
    if (currentIndex == -1) {
      this.appointmentsData.push({
        reservationId: data.reservationId,
        message: data.message,
        currentStep: data.isError ? 0 : data.index + 1,
        isError: data.isError,
        index: data.isError ? null : data.index,
        repeat: 0,
      });
     if (data.remove) {
        this.errorAppointments.push(this.appointments[index]);
        this.deleteReservationById(data.reservationId);
      }
      if (data.state) {
        this.currentReservedUser = data.message;
        this.playAlertSound();
        this.showSuccessModal = true;
        this.loadData();
      }
    } else {
      const currentData = this.appointmentsData[currentIndex];
      let repeat: number = 0;

      if (data.message == currentData.message.replace(/\s*\([^)]*\)/g, '')) {
        repeat = currentData.repeat + 1;
      }
      this.appointmentsData[currentIndex] = {
        ...currentData,
        currentStep: data.isError ? currentData.currentStep : data.index + 1,
        message: repeat != 0 ? `${data.message}(${repeat})` : data.message,
        isError: data.isError,
        index: data.isError ? null : data.index,
        repeat: repeat,
      };
      if (data.remove) {
        this.errorAppointments.push(this.appointments[index]);
        this.deleteReservationById(data.reservationId);
      }
      if (data.state) {
        this.currentReservedUser = data.message;
        this.playAlertSound();
        this.showSuccessModal = true;
        this.loadData();
      }
    }
    console.log(this.appointmentsData);
  }
  deleteReservationById(reservationId: string) {
    for (const chunk of this.chunks) {
      console.log(chunk.data);
      const index = chunk.data.findIndex((r: any) => r._id === reservationId);
      console.log(index);
      if (index !== -1) {
        chunk.data.splice(index, 1); // delete it
        return true; // found and deleted
      }
    }
    return false; // not found
  }
}
