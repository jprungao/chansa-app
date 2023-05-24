import { createReducer, on } from '@ngrx/store'
import * as MenuAction from './menu.action'

export const initialState = false

export const menuReducer = createReducer(
    initialState,
    on(MenuAction.toggleMenu, (state) => state = !state)
)