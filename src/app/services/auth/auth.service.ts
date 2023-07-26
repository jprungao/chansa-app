import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { tap } from 'rxjs/operators'
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs'
import { User } from 'src/app/models/user.model';
import { Credentials } from 'src/app/models/userCredential.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  login(credentials: any): Observable<any> {
    return this.httpClient.post<User>(`${this.configService.apiHost}/auth/login`, credentials)
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

}
