import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

import { Observable, of } from 'rxjs'
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.reducer';
import { select } from '@ngrx/store'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  user$: Observable<User | null>

  constructor(private store: Store<{app: AppState}>) {
    this.user$ = this.store.pipe(select(state => state.app.user))
  }

  ngOnInit() {
    //this.userService.getUser()
  }
}
