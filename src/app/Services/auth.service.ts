import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(name: string, username: string, userType: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('userType', userType);
  }

  getToken(): string | null {
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('userType');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'arjun' && password === 'arjun') {
      this.setToken('Arjun Pandit', 'arjunpandit', 'user');
      return of({ name: 'Arjun Pandit', username: 'arjunpandit' });
    } else if (username === 'admin' && password === 'admin') {
      this.setToken('Admin', 'admin', 'admin');
      return of({ name: 'admin', username: 'admin' });
    }
    return throwError(new Error('Failed to login'));
  }
}
