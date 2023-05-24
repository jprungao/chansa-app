import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { tap } from 'rxjs/operators'
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  login(credentials: any) {
    return this.httpClient.post(`${this.configService.apiHost}/auth/login`, credentials).pipe(tap((data: any) => {
      console.log(data)
      localStorage.setItem(this.JWT_TOKEN, data.response.token)
      localStorage.setItem('user', JSON.stringify(data.response.user))
    }))
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

}
