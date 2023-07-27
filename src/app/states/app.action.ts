import { createAction, props } from '@ngrx/store'
import { Credentials } from '../models/userCredential.model'
import { User } from '../models/user.model'

export const ToggleMenu = createAction('[Navbar] Toggle')

export const Login = createAction(
    '[Login] Login',
    props<{ credentials: Credentials}>()
    )

export const LoginSuccess = createAction(
    '[Login] LoginSuccess',
    props<{user: User}>()
)

export const LoginFailure = createAction(
    '[Login] LoginFailure',
    props<{error: any | null}>()
)