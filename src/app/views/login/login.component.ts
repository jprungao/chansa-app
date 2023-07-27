import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from 'src/app/states/app.action';
import { Store } from '@ngrx/store'
import { Credentials } from 'src/app/models/userCredential.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors: string[] = []

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router) { }

  onSubmit() {
    this.errors = []
    if (this.loginForm.valid) {
      // Perform the login action
      this.store.dispatch(Login({credentials: {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      } as Credentials}))
    } else {
      // Trigger validation for all fields
      this.loginForm.markAllAsTouched();
    }
  }
}
