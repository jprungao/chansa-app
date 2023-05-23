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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchComponent,
    FeaturedComponent,
    MatchesComponent,
    DashboardComponent,
    MenuComponent,
    InternalnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
