import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/core/auth.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    await this.authService.validateToken().subscribe(
      () => {
        if (!this.authService.isUserAuthenticated()) {
          return Promise.reject();
        }
        return Promise.reject();
      },
      (err) => {
        return false;
      }
    );
    return true;
  }
}
