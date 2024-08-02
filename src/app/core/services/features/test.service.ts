import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverUrl } from 'app/core/constants/api.constant';

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private http: HttpClient) {}
    post(url: string, subCategory: string) {
      console.log(subCategory)
    let httpParams = new HttpParams().append('subCategory', subCategory);
    this.http.get(serverUrl + url, { params: httpParams }).subscribe();
  }
}
