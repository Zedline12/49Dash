import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocketService } from './websockets/socket.service';
import { Reservation } from 'app/core/interfaces/reservation.interface';
export enum ReservationState {
  'قيد الانشاء',
  'منجز',
}
export enum ReservationProcessState {
  'يتم تسجيل الدخول',
  'في الصفحة الرئيسية',
  'في صفحة معاملاتي',
  'يتم تعريف المعاملة',
  'يتم اعداد تفاصيل المعاملة',
  'تم حجز المعاملة',
  'فشل',
  'إعادة تحميل صفحة تسجيل الدخول',
  'إعادة تحميل الصفحة الرئيسية',
  'إعادة تحميل صفحة الطلبات',
  'إعادة تحميل صفحة تعريف الطلب',
  'إعادة تحميل صفحة تفاصيل الطلب',
}
@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(
    private httpClient: HttpClient,
    private readonly webSocketService: SocketService
  ) {}
  private apiUrl = 'http://localhost:3001';
  getAllApointments(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/reservations`);
  }
  getAllChunks(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/chunk`);
  }
  updateChunk(id: string, chunkInterval:number) {
        return this.httpClient.patch(`${this.apiUrl}/settings/chunk/${id}`,{interval:chunkInterval});
  }
  getSuccessAppointments(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/reservations/success`);
  }
  deleteAllReservations() {
    return this.httpClient.delete(`${this.apiUrl}/reservations`);
  }
  getSettings(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/settings`);
  }
  updateChunksSizes(chunksSizes:number): Observable<any>{
    return this.httpClient.patch(`${this.apiUrl}/settings/chunksSizes`,{chunksSizes:chunksSizes});
  }
  editSettings(data: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/settings`, data);
  }
  createAppointment(appointmentData: {
    email: string;
    password: string;
    scholarshipType: string;
    passportOption: string;
    transactionsCount: number;
    isDateAutomatic: boolean;
    reservationDate: Date;
  }): Observable<any> {
    return this.httpClient.post(this.apiUrl+"/reservations", appointmentData);
  }
  downloadExcel() {
    return this.httpClient.get(this.apiUrl + '/reservations/export');
  }
  deleteReservation(id: string) {
    return this.httpClient.delete(this.apiUrl + '/reservations/' + id);
  }
  onAppointmentProcessCreation(): Observable<any> {
    return this.webSocketService.onEvent('reservationProcessState');
  }
  updateReservation(id: string, reservation: any): Observable<Reservation> {
    console.log(reservation);
    return this.httpClient.patch<Reservation>(
      `${this.apiUrl}/reservations/${id}/update`,
      reservation
    );
  }
  startReservations() {
    return this.httpClient.get(`${this.apiUrl}/reservations/start`);
  }
  stopReservations() {
    this.webSocketService.sendMessage("shutdown", "");
  }
  // Scholarship Types
  getScholarshipTypes(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/reservations/scolarship-types`);
  }

  addScholarshipType(type: { value: string; id: number }): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/reservations/scolarship-type`, type);
  }

  updateScholarshipType(
    id: string,
    type: { value: string; id: number }
  ): Observable<any> {
    return this.httpClient.patch(
      `${this.apiUrl}/reservations/scolarship-type/${id}/update`,
      type
    );
  }
  updatePassportOption(
    id: string,
    option: { value: string; id: number }
  ): Observable<any> {
    return this.httpClient.patch(
      `${this.apiUrl}/reservations/passport-option/${id}/update`,
      option
    );
  }

  deleteScholarshipType(id: string): Observable<any> {
    return this.httpClient.delete(
      `${this.apiUrl}/reservations/scolarship-types/${id}/delete`
    );
  }

  // Passport Options
  getPassportOptions(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/reservations/passport-options`);
  }

  addPassportOption(option: { value: string; id: number }): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/reservations/passport-option`, option);
  }

  deletePassportOption(id: string): Observable<any> {
    return this.httpClient.delete(
      `${this.apiUrl}/reservations/passport-optionS/${id}/delete`
    );
  }
}
