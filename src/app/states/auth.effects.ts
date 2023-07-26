import { Injectable } from '@angular/core'
import { Login, LoginFailure, LoginSuccess } from './app.action'

import { Credentials } from '../models/userCredential.model'
import { AuthService } from '../services/auth/auth.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { User } from '../models/user.model'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs'

@Injectable()
export class AuthEffects {
    login$ = ''


    constructor(private actions$: Actions, private authService: AuthService) {}
}