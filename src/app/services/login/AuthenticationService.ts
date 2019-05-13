import {Injectable} from '@angular/core';
import BackendUser from '../../models/backend.user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  public constructor() {}

  public isLoggedIn() {
    if (localStorage.getItem('authToken')) {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedUser');
    window.location.href = '/login';
  }

  public getLoggedUserUsername() {
    const loggedUser: BackendUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser.name;
  }

}
