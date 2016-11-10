

import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { LoggedService } from './logged.service';

@Injectable()
export class LoginguardService {


  constructor(private router: Router, private LoggedService: LoggedService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.LoggedService.loggedIn) {

      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
