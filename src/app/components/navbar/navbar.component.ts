import { Component, Input } from '@angular/core';

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/user.model';
import { ToggleMenu } from 'src/app/states/app.action';
import { AppState } from 'src/app/states/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() user: User | null = null
  menuState$: Observable<boolean>

  constructor(private store: Store<{ app: AppState }>) {
    this.menuState$ = this.store.pipe(select(state => state.app.menu))
  }


  toggleMenu() {
    this.store.dispatch(ToggleMenu())
  }
}
