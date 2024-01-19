import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (!this.auth.isLoggedIn()) {
    //   // this.router.navigate(['/login']);
    //   return false;
    // }
    // console.log('alert', localStorage.getItem('userType'));

    if (localStorage.getItem('userType') === 'admin') {
      return true;
    }
    alert('Only Admin Can Access this page');
    return false;
  }
}
