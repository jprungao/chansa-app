import { createReducer, on } from '@ngrx/store'
import * as MenuAction from './app.action'

export interface AppState {
    menu: boolean;
}

export const initialState: AppState = {
    menu: false
}

export const menuReducer = createReducer(
    initialState,
    on(MenuAction.toggleMenu, (state) => ({menu: !state.menu}))
)