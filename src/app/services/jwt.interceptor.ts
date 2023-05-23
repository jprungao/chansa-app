import { Injectable } from '@angular/core'
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
} from '@angular/common/http'

import { AuthService } from './auth.service'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getJwtToken()

        if(token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401) {
                // remove token from local storage to log user out
                localStorage.removeItem('JWT_TOKEN');
                // redirect to the login route, or show a modal
                this.router.navigate(['/login']);
              }
              return throwError(() => error);
            })
          );
    }
}