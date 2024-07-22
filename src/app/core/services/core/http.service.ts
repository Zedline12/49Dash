import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from '../../constants/api.constant';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  get(url: string, params?: any) {
    return this.http.get(url, { observe: 'response', params });
  }
  post(url: string, body: any) {
    return this.http.post(url, body, { observe: 'response' });
  }
  put(url: string, body: any) {
    return this.http.put(url,body,{ observe: 'response' });
  }
  delete(url: string) {
    return this.http.delete(url, { observe: 'response' });
  }
}
