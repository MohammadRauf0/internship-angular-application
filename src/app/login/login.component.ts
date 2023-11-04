import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.warn(this.form.value);
  }
  /**
   *   updateName(){
    this.form.get("username")!.setValue("Mohammad");
  }
   */

  constructor(private authService: AuthService) { }
  
  private AUTH_LOCAL_STORAGE_TOKEN = 'token';

  ngOnInit(): void { }

  onLogin() {
    const formData = this.form.value;
    this.authService.onLogin(formData).subscribe((res: any) => {
      console.log('res', res);
      localStorage.setItem(this.AUTH_LOCAL_STORAGE_TOKEN, res.token); 
    })
    console.log("form", this.form);
    console.log(this.form.status);
  }

}
