import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'

  constructor(private httpClient: HttpClient) { }

  login(credentials: any) {
    return this.httpClient.post('http://localhost:3000/auth/login', credentials).pipe(tap((data: any) => {
      localStorage.setItem(this.JWT_TOKEN, data.response.token)
    }))
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

}
