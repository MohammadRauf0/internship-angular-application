import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import routeConfig from './routes';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { InstrumentListComponent } from './DashboardComponents/instrument-list/instrument-list.component';
import { ArtistListComponent } from './DashboardComponents/artist-list/artist-list.component';
import { BandListComponent } from './DashboardComponents/band-list/band-list.component';
import { ConcertListComponent } from './DashboardComponents/concert-list/concert-list.component';
import { ConcertBandListComponent } from './DashboardComponents/concert-band-list/concert-band-list.component';
import { RoleListComponent } from './DashboardComponents/role-list/role-list.component';
import { RoleInstrumentListComponent } from './DashboardComponents/role-instrument-list/role-instrument-list.component';
import { HomePageComponent } from './DashboardComponents/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InstrumentListComponent,
    ArtistListComponent,
    BandListComponent,
    ConcertListComponent,
    ConcertBandListComponent,
    RoleListComponent,
    RoleInstrumentListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
