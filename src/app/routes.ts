import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routeConfig: Routes = [
  { path: '', component: LoginComponent, title: 'login page' },
  { path: 'signup', component: SignupComponent, title: 'signup Page' },
  { path: 'dashboard', component: DashboardComponent, title: 'dashboard Page' },
];

export default routeConfig;
