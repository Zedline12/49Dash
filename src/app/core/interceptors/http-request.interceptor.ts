import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  catchError,
  finalize,
  map,
  Observable,
  observeOn,
  throwError,
} from 'rxjs';
import { ErrorResponse } from '../classes/ErrorResponse';
import { SuccessResponse } from '../classes/SuccessResponse';
import { AuthService } from '../services/core/auth.service';
import { apiEndPoints } from '../constants/api.constant';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private AuthService: AuthService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    if (req.url == apiEndPoints.auth.refreshToken) return next.handle(req);
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toaster.error(new ErrorResponse(error).ErrorMessage());
        return throwError(error);
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
