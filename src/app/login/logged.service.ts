import { Injectable } from '@angular/core';

@Injectable()
export class LoggedService {

  loggedIn = false;

  constructor() { }

    login(user, password) {
    if (user && password) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

}
