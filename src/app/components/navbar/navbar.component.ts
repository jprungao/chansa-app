import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as MenuAction from '../../stores/menu.action'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() user: any
  menuState$: Observable<boolean>

  constructor(private store: Store<{ menu: boolean}>) {
    this.menuState$ = this.store.select('menu')
  }


  toggleMenu() {
    this.store.dispatch(MenuAction.toggleMenu())
  }
}
