import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({ providedIn: 'root' })
export class StripeService {
  constructor(private readonly http: HttpClient) {}

  public getPayments(page:number,limit:number) {
    let params = new HttpParams();
params = params.append('page',page);
params = params.append('limit', limit);

    return this.http.get(`${environment.serverUrl}/stripe/payments`,{params:params});
  }
}
