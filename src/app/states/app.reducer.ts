import { createReducer, on } from '@ngrx/store'

import { User } from '../models/user.model';

import * as Actions from './app.action'

export interface AppState {
    menu: boolean;
    user: User | null,
    loading: boolean;
    error: any
}

export const initialState: AppState = {
    menu: false,
    user: null,
    loading: false,
    error: null
}


export const AppReducer = createReducer(
    initialState,
    on(Actions.ToggleMenu, (state) => ({...state, menu: !state.menu})),
    on(Actions.Login, (state => ({...state, loading: true, error: null}))),
    on(Actions.LoginSuccess, (state, { user }) => ({ ...state, user, loading: false})),
    on(Actions.LoginFailure, (state ,{ error }) => ({ ...state, error, loading: false}))
)