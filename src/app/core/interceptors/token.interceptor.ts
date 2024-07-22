import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  finalize,
  from,
  map,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { AuthService } from '../services/core/auth.service';
import { apiEndPoints } from '../constants/api.constant';
import { SuccessResponse } from '../classes/SuccessResponse';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.handle(req, next));
  }

  async handle(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    let token = await this.authService.getAccessToken();
    if (!token && req.url != apiEndPoints.auth.login) {
      this.router.navigate(['/auth']);
    }
    if (!token) {
      return next.handle(req).toPromise() as Promise<HttpEvent<any>>;
    }
    req = this.addTokenHeader(req, token);
    if (req.url == apiEndPoints.auth.refreshToken) {
      return next.handle(req).toPromise() as Promise<HttpEvent<any>>;
    }
    if (await this.authService.isTokenExpired()) {
      return this.handleExpiredAccessToken(req, next);
    } else {
      return next
        .handle(req)
        .pipe(finalize(() => this.spinner.hide()))
        .toPromise() as Promise<HttpEvent<any>>;
    }
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  private handleExpiredAccessToken(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService
      .refreshToken()
      .pipe(
        switchMap((res: HttpResponse<any>) => {
          const accessToken = new SuccessResponse(res).AccessToken();
          this.authService.editAccessToken(accessToken);
          req = this.addTokenHeader(req, accessToken);
          return next.handle(req);
        }),
        finalize(() => this.spinner.hide())
      )
      .toPromise() as Promise<HttpEvent<any>>;
  }
}
