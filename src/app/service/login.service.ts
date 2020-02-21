import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'https://reqres.in/api/login';
  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { 'email': username, 'password': password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  Registration(email: string, password: string) {
    return this.http.post('https://reqres.in/api/register', { 'email': email, 'password': password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


}
