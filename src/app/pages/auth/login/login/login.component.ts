import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  bool = false;
  constructor(
    private AuthService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.AuthService.login(user).subscribe(
        (result) => {
          console.log(result)
          this.AuthService.storeAccessToken(result.data.access_token);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        },
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
