import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.errors = []
    if (this.loginForm.valid) {
      // Perform the login action
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigate(['/'])
      }, (error => {
        if(error) {
          error.error.message.forEach((msg:string) => {
            this.errors.push(msg)
          })
        }
      }));
    } else {
      // Trigger validation for all fields
      this.loginForm.markAllAsTouched();
    }
  }
}
