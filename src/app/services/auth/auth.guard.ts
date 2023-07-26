import { Injectable } from '@angular/core'
import { AuthService } from './auth.service';

import { Observable } from 'rxjs'
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router'

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    // logged in, so return true
    return this.authService.isLoggedIn();
    
  }
}