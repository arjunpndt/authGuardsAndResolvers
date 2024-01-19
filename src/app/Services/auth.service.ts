import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['admin']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'arjunpandit' && password === 'arjun123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Arjun Pandit', username: 'arjunpandit' });
    }
    return throwError(new Error('Failed to login'));
  }
}
