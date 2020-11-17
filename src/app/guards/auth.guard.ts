import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Pages } from '../config';
import {AuthService} from '../services';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router) {
  }

  canActivate(_, nextState: RouterStateSnapshot): boolean {
    const nextUrl = nextState.url.replace('/', '').split('?')[0];
    if (nextUrl === Pages.LOGIN) {
      if (this.authSrv.isLoggedIn) {
        this.router.navigate([Pages.DASHBOARD]);
        return false;
      } else {
        return true;
      }
    } else {
      if (this.authSrv.isLoggedIn) {
        return true;
      } else {
        this.router.navigate([Pages.LOGIN]);
        return false;
      }
    }
  }
}
