import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { catchError, finalize, throwError } from 'rxjs';
import { AuthService } from '../services/core/auth.service';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private authService:AuthService,
    private toaster: ToastrService,
  ) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.spinner.show();
    const authToken = this.authService.getAccessToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),

      finalize(() => {
        this.spinner.hide(); // Hide spinner
      }),
    );
  }
}
