import { Injectable } from '@angular/core';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  get apiHost(): string {
    return environment.host
  }
}
