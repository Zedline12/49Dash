import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IHomePageData } from 'app/core/interfaces/IHomePageData';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private readonly http: HttpClient) {}

  public getData(): Observable<IHomePageData> {
    return this.http.get<IHomePageData>(
      `${environment.serverUrl}/dashboard/home`,
    );
  }
}
