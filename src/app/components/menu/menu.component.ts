import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store'
import { ToggleMenu } from 'src/app/states/app.action';
import { Observable } from 'rxjs'
import { AppState } from 'src/app/states/app.reducer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuState$: Observable<Boolean>

  constructor(private router: Router, private store: Store<AppState>) {
    this.menuState$ = store.pipe(select((state: any) => state.app?.menu))
  }

  toggleMenu() {
    this.store.dispatch(ToggleMenu())
  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.removeItem('JWT_TOKEN')
    localStorage.removeItem('user')
    this.toggleMenu()
  }
}
