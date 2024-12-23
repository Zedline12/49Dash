import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from '../../constants/api.constant';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private tostr: ToastrService,
  ) {}
  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(url, { params })
    
  }
  post(url: string, body: any) {
    return this.http.post(url, body, { observe: 'response' });
  }
  put(url: string, body: any) {
    return this.http.put(url, body, { observe: 'response' });
  }
  delete(url: string) {
    return this.http.delete(url, { observe: 'response' });
  }
}
