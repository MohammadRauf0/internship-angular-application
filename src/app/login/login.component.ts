import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSignup: boolean = false;

  showSignupForm() {
    this.showSignup = true;
  }

  closeSignupForm() {
    this.showSignup = false;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
