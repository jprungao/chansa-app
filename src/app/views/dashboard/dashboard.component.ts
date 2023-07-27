import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

import { Observable, of } from 'rxjs'
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState, initialState } from 'src/app/states/app.reducer';
import { select } from '@ngrx/store'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  user$: Observable<User>

  constructor(private store: Store<{app: AppState | any}>) {
    this.user$ = this.store.select(state => state.app.user)
  }
}
