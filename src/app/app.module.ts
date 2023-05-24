import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { InternalnavComponent } from './components/internalnav/internalnav.component';
import { MatchComponent } from './views/match/match.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';

import { StoreModule } from '@ngrx/store'
import { menuReducer } from './stores/menu.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchComponent,
    FeaturedComponent,
    MatchesComponent,
    DashboardComponent,
    MenuComponent,
    InternalnavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ menu: menuReducer})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
