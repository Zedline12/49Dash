import {
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import {
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of,
  tap,
} from 'rxjs';
import { apiEndPoints } from '../../constants/api.constant';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { environment } from '../../../../environments/environment';
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
  }): Observable<any> {
    return this.http.post(environment.serverUrl+"/auth/login",user)
  }

  validateToken(): Observable<any> {
    return this.http.post<any>(environment.serverUrl+"/auth/validate-token",{})
  }

  storeAccessToken(token: string) {
    localStorage.setItem(environment.AccessTokenKey, token);
  }
  editAccessToken(token: string) {
    localStorage.removeItem(environment.AccessTokenKey);
    localStorage.setItem(environment.AccessTokenKey, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(environment.AccessTokenKey)!;
  }
  getRefreshToken(): string {
    return localStorage.getItem(environment.AccessTokenKey)!;
  }
  isUserAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
}
