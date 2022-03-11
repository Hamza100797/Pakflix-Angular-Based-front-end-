import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }


getToken() {
  return localStorage.getItem('token')
}
  isLoggedIn():any {

    if (this.getToken()!==null || this.getToken()!==undefined) {
      return this.getToken() !== null;
    }
    else {
      console.log('logic pass gi')
    }


  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
