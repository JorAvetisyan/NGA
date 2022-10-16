import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate() {
    if (!localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/sign-in');
      return false;
    }
    return true;
  }

}
