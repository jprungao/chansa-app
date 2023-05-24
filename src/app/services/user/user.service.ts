import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config.service';

import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  async getUser(id: string): Promise<any> {
    return this.http.get(`${this.configService.apiHost}/users/${id}`).pipe(tap((data: any) => {
      return data.response
    }))
  }
}
