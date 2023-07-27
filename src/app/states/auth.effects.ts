import { Injectable } from '@angular/core'
import { Login, LoginFailure, LoginSuccess } from './app.action'

import { AuthService } from '../services/auth/auth.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, of } from 'rxjs'
import { catchError, concatMap, map, tap } from 'rxjs/operators'
import { User } from '../models/user.model'
import { Router } from '@angular/router'

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Login),
            exhaustMap((action) =>
                this.authService.login(action.credentials).pipe(
                    map((user: User) => LoginSuccess({user})),
                    catchError((err) => of({type: '[Login] LoginFailure', payload: err}))
                , tap((action: any) => {
                    if(action.type.includes('LoginSuccess')) {
                        this.router.navigate(['/dashboard'])
                        localStorage.setItem('JWT_TOKEN', action.user.token)
                    }
                }))
            )
        ),
        { functional: true}
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
}