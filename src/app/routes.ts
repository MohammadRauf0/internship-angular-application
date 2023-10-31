import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routeConfig: Routes = [
  { path: '', component: LoginComponent, title: 'login page' },
  { path: 'signup', component: SignupComponent, title: 'signup Page' },
];

export default routeConfig;
