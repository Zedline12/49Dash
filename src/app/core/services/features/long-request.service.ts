import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LongRequestService {
  private longRequest$: Observable<any> | null = null;

  constructor(private http: HttpClient) {}

  startLongRequest(request: Observable<any>): Observable<any> {
    if (!this.longRequest$) {
      this.longRequest$ = request.pipe(
        shareReplay(1) // Shares the response across multiple subscribers
      );
    }
    return this.longRequest$;
  }
}
