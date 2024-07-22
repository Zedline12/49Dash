import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  bool = false;
  constructor(private AuthService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {}
  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      user.fcmToken = 's';
      this.AuthService.login(user).subscribe();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
