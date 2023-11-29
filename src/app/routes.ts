import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtistListComponent } from './DashboardComponents/artist-list/artist-list.component';
import { BandListComponent } from './DashboardComponents/band-list/band-list.component';
import { ConcertBandListComponent } from './DashboardComponents/concert-band-list/concert-band-list.component';
import { ConcertListComponent } from './DashboardComponents/concert-list/concert-list.component';
import { InstrumentListComponent } from './DashboardComponents/instrument-list/instrument-list.component';
import { RoleInstrumentListComponent } from './DashboardComponents/role-instrument-list/role-instrument-list.component';
import { RoleListComponent } from './DashboardComponents/role-list/role-list.component';

const routeConfig: Routes = [
  { path: '', component: LoginComponent, title: 'login page' },
  { path: 'signup', component: SignupComponent, title: 'signup Page' },
  { path: 'dashboard', component: DashboardComponent, title: 'dashboard Page' },
  { path: 'artistList', component: ArtistListComponent, title: 'artistList Page'},
  { path: 'bandList', component: BandListComponent, title: 'bandList Page'},
  { path: 'concertBandList', component: ConcertBandListComponent, title: 'concertBandList page'},
  { path: 'concertList', component: ConcertListComponent, title: 'concertList page'},
  { path: 'instrumentList', component: InstrumentListComponent, title: 'instrumentList page'},
  { path: 'roleInstrumentList', component: RoleInstrumentListComponent, title: 'roleInstrumentList page'},
  { path: 'roleList', component: RoleListComponent, title: 'roleList page'},
];

export default routeConfig;
