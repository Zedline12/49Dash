import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import {
  afterNextRender,
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { apiEndPoints } from '../../constants/api.constant';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { environment } from '../../../../environments/environment';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loggedUser?: any;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);
  accessToken!: string;
  isBrowser = new BehaviorSubject<boolean>(false);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private tostr: ToastrService
  ) {}

  login(user: {
    email: string;
    password: string;
    fcmToken: string;
  }): Observable<any> {
    return this.http
      .post<any>(apiEndPoints.auth.login, user, { observe: 'response' })
      .pipe(
        tap((res: HttpResponse<any>) =>
          this.doLoginUser(
            new SuccessResponse(res).AccessToken(),
            new SuccessResponse(res).refreshToken()
          )
        )
      );
  }
  isTokenExpired(): Promise<boolean> {
    return Promise.resolve().then(async () => {
      const token = (await this.getAccessToken()) ?? '';
      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      return Math.floor(new Date().getTime() / 1000) >= expiry;
    });
  }
  refreshToken(): Observable<any> {
    return this.http.post<any>(
      apiEndPoints.auth.refreshToken,
      { refreshToken: this.getRefreshToken() },
      { observe: 'response' }
    );
  }
  doLoginUser(accessToken: string, refreshToken: string) {
    this.storeAccessToken(accessToken);
    this.storeRefreshToken(refreshToken);
    this.isAuthenticatedSubject.next(true);
    this.tostr.success('Logged in successfully');
    this.router.navigate(['/']);
  }
  validateToken(): Observable<any> {
    return this.http.get<any>(apiEndPoints.auth.tokenValidation).pipe(
      tap((res: HttpResponse<any>) => {
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  storeAccessToken(token: string) {
    localStorage.setItem(environment.accessToken, token);
  }
  editAccessToken(token: string) {
    localStorage.removeItem(environment.accessToken);
    localStorage.setItem(environment.accessToken, token);
  }
  storeRefreshToken(token: string) {
    localStorage.setItem(environment.refreshToken, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(environment.accessToken)!;
  }
  getRefreshToken(): string {
    return localStorage.getItem(environment.accessToken)!;
  }
  isUserAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
}
