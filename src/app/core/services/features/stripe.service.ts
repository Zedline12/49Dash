import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({ providedIn: 'root' })
export class StripeService {
  constructor(private readonly http: HttpClient) {}

  public getPayments() {
    return this.http.get(`${environment.serverUrl}/stripe/payments`);
  }
}
