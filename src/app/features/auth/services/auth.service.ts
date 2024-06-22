import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  signIn(username: string, password: string) {
    if (password === 'admin' && username === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      console.log('Sesión iniciada. Usuario: ' + username);
      this.router.navigate(['Country/search-countries']);
      return true;
    } else {
      return false;
    }
  }
  signOut() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['Auth/login']);
  }
}
