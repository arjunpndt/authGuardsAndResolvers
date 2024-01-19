import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(username: { name: string; username: string }) {
    localStorage.setItem('name', username.name);
    localStorage.setItem('username', username.username);
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
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'arjun' && password === 'arjun') {
      this.setToken({ name: 'Arjun Pandit', username: 'arjunpandit' });
      return of({ name: 'Arjun Pandit', username: 'arjunpandit' });
    }
    return throwError(new Error('Failed to login'));
  }
}
