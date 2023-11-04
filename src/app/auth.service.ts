import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }

  onLogin(obj: any) : Observable<any>{
    return this.http.post('https://trainapi.caretta.net/api/auth/login',obj);
  }
}

