import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/core/auth.service';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async canActivate(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authService.validateToken().subscribe((result) => {
       resolve(result)
      }, (err) => {
        this.router.navigate(['/auth'])
        reject()
       })
     })
  }
}
