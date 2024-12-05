import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  finalize,
} from 'rxjs';
import { AuthService } from '../services/core/auth.service';
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
  ): any {
    this.spinner.show();
    // if (req.url == apiEndPoints.auth.refreshToken) return next.handle(req);
    // return next.handle(req).pipe(
    //   map((event: HttpEvent<any>) => {
    //     return event;
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     this.toaster.error(new ErrorResponse(error).ErrorMessage());
    //     return throwError(error);
    //   }),
    return next.handle(req).pipe(
      finalize(() => {
        this.spinner.hide(); // Hide spinner
      })
  );
  }
  }

