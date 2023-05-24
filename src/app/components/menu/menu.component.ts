import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as MenuAction from '../../stores/menu.action'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuState$: Observable<boolean>

  constructor(private router: Router, private store: Store<{ menu: boolean }>) {
    this.menuState$ = this.store.select('menu')
  }

  toggleMenu() {
    this.store.dispatch(MenuAction.toggleMenu())
  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.removeItem('JWT_TOKEN')
    localStorage.removeItem('user')

  }
}
